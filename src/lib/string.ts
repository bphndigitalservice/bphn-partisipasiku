export function truncateSlug(url: string): string {
  return url.length > 75 ? url.substring(0, 74) : url;
}
