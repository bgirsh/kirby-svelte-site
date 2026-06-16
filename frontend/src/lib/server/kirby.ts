import { KIRBY_API_URL } from '$env/static/private';

export async function kirbyQuery(
  query: string,
  select: Record<string, unknown>
) {
  const response = await fetch(KIRBY_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query,
      select
    })
  });

  const json = await response.json();

  if (json.status !== 'ok') {
    throw new Error(json.message || 'Kirby query failed');
  }

  return json.result;
}

export async function kirbyFileQuery(fileIds: string[]) {
  if (!fileIds.length) return [];

  return kirbyQuery('page("home").files', {
    files: {
      query: 'page("home").files',
      select: {
        id: true,
        uuid: true,
        filename: true,
        url: true,
        alt: true
      }
    }
  });
}