interface AnalyticsRow {
  label: string;
  value: number;
  detail?: string;
}

interface AnalyticsResponse {
  configured: boolean;
  range: { days: number };
  totals: { visits: number; pageViews: number; actions: number };
  pages: AnalyticsRow[];
  events: AnalyticsRow[];
  notices: string[];
}

const byId = (id: string) => document.getElementById(id);
const formatNumber = (value: number) => new Intl.NumberFormat("en-IN").format(value);

function renderRows(container: HTMLElement | null, rows: AnalyticsRow[], emptyText: string) {
  if (!container) return;
  container.replaceChildren();

  if (rows.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = emptyText;
    container.append(empty);
    return;
  }

  rows.forEach((row, index) => {
    const item = document.createElement("div");
    item.className = "report-row";

    const rank = document.createElement("span");
    rank.className = "rank";
    rank.textContent = String(index + 1).padStart(2, "0");

    const label = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = row.label;
    label.append(title);
    if (row.detail) {
      const detail = document.createElement("small");
      detail.textContent = row.detail;
      label.append(detail);
    }

    const value = document.createElement("b");
    value.textContent = formatNumber(row.value);
    item.append(rank, label, value);
    container.append(item);
  });
}

async function loadAnalytics(days: string) {
  const status = byId("status");
  if (status) status.textContent = "Loading analytics...";

  try {
    const response = await fetch(`/api/analytics?days=${encodeURIComponent(days)}`, {
      headers: { accept: "application/json" },
    });
    if (!response.ok) throw new Error(`Analytics request failed (${response.status})`);

    const data = (await response.json()) as AnalyticsResponse;
    const visits = byId("visits");
    const pageViews = byId("page-views");
    const actions = byId("actions");
    if (visits) visits.textContent = formatNumber(data.totals.visits);
    if (pageViews) pageViews.textContent = formatNumber(data.totals.pageViews);
    if (actions) actions.textContent = formatNumber(data.totals.actions);

    renderRows(byId("pages"), data.pages, "Page-view data will appear after Web Analytics is connected.");
    renderRows(byId("events"), data.events, "Interaction data will appear after the event Worker is deployed.");

    if (status) {
      status.textContent = data.notices.length > 0
        ? data.notices.join(" ")
        : `Updated for the last ${data.range.days} days.`;
      status.dataset.state = data.configured ? "ready" : "setup";
    }
  } catch (error) {
    if (status) {
      status.textContent = error instanceof Error ? error.message : "Unable to load analytics.";
      status.dataset.state = "error";
    }
  }
}

const period = document.querySelector<HTMLSelectElement>("#period");
period?.addEventListener("change", () => loadAnalytics(period.value));
loadAnalytics(period?.value ?? "30");
