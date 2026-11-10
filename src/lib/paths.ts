export const basePath = import.meta.env.BASE_URL.replace(/\/?$/, '/');

export function postPath(id: string) {
  return `${basePath}blog/${id}/`;
}
