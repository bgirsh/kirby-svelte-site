import { kirbyQuery } from '$lib/server/kirby';

function parseKirbyStructure(value: unknown) {
  if (!value || value === '-' || value === '[]') {
    return [];
  }

  if (Array.isArray(value)) {
    return value;
  }

  if (typeof value === 'string') {
    try {
      return JSON.parse(value);
    } catch {
      return [];
    }
  }

  return [];
}

export async function load() {
  const site = await kirbyQuery('site', {
    mainNavigation: 'site.mainNavigation.toStructure'
  });

  console.log('KIRBY SITE DATA:', site);

  return {
    navigation: site.mainNavigation ?? []
  };
}