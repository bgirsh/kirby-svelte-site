export function highlightText(
  title?: string,
  highlight?: string
): string {
  if (!title) return '';

  if (!highlight) return title;

  return title.replace(
    highlight,
    `<em>${highlight}</em>`
  );
}