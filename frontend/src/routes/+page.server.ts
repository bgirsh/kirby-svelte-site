import { kirbyQuery } from '$lib/server/kirby';

function parseKirbyJson(value: unknown) {
  if (!value || value === '-') return [];

  if (Array.isArray(value)) return value;

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
  const page = await kirbyQuery('page("home")', {
    title: true,
    pageBuilder: true,
    files: {
      query: 'page("home").files',
      select: {
        uuid: true,
        filename: true,
        url: true,
        alt: true
      }
    }
  });

  const pageBuilder = parseKirbyJson(page.pageBuilder);

  const files = page.files ?? [];

  const pageBuilderWithFiles = pageBuilder.map((block: any) => {
    if (block.type !== 'sizes') {
      return block;
    }

    const galleryIds = parseKirbyJson(block.content.gallery);

    const gallery = galleryIds
      .map((galleryItem: string) => {
        return files.find((file: any) => {
          return file.uuid === galleryItem;
        });
      })
      .filter(Boolean);

    return {
      ...block,
      content: {
        ...block.content,
        gallery
      }
    };
  });

  return {
    page: {
      ...page,
      pageBuilder: pageBuilderWithFiles
    }
  };
}