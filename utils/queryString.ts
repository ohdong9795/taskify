export default function buildQueryString(params: Record<string, unknown>): string {
  const queryString = Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&');
  return `?${queryString}`;
}
