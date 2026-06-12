const KIRBY_API_URL = 'http://localhost:8000/api/query';

export async function kirbyQuery(query: string, select: Record<string, unknown>) {
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