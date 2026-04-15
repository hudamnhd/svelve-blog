import type { Post } from '@/types/post.type';
import type { PageLoad } from './$types';
import { getCollectionPosts } from "@/server";
import { json } from "@sveltejs/kit";

export const load: PageLoad = async ({ fetch }) => {
  const posts = getCollectionPosts("amalan");
  return { posts };
}
