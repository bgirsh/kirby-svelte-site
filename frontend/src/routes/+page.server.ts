import { kirbyQuery } from '$lib/server/kirby';

export async function load() {
  const page = await kirbyQuery('page("home")', {
    title: true,
    pageBuilder: true
  });

  return {
    page: {
      ...page,
      pageBuilder: JSON.parse(page.pageBuilder ?? '[]')
    }
  };
}