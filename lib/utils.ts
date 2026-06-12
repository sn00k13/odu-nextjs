export function blogExcerpt(html: string, length = 150): string {
  const text = html.replace(/<[^>]*>/g, '');
  return text.length > length ? text.slice(0, length) + '…' : text;
}
