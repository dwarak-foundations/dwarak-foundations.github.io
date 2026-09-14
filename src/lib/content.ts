import type { CollectionEntry } from "astro:content";

export const projectPath = (project: CollectionEntry<"projects">) =>
  `/projects/${project.id}/`;

export const projectStatus = (status: CollectionEntry<"projects">["data"]["status"]) =>
  status.charAt(0).toUpperCase() + status.slice(1);

export const byOrder = <T extends { data: { order: number } }>(a: T, b: T) =>
  a.data.order - b.data.order;
