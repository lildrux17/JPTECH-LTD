export function asset(filename) {
  return new URL(`../assets/${filename}`, import.meta.url).href;
}
