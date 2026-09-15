export const whatsappNumber = "919600069633";
export const whatsappDisplayNumber = "9600069633";

export function whatsappHref(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
