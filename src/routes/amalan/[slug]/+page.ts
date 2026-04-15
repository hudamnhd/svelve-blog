import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  try {
    const post = await import(`../../../content/amalan/${params.slug}.md`);
    return {
      content: post.default,
      meta: post.metadata,
      slug: params.slug
    };
  } catch (e) {
    error(404, `Tidak ditemukan ${params.slug}`);
  }
}
