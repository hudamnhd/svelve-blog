import type { Post } from "@/types/post.type";

export function getCollectionPosts(basePath: string): Post[] {
  const modules = import.meta.glob("/src/content/**/*.md", { eager: true });

  const posts: Post[] = [];

  for (const path in modules) {
    if (!path.includes(`/content/${basePath}/`)) continue;

    const file = modules[path] as any;
    const slug = path.split("/").at(-1)?.replace(".md", "");

    if (file?.metadata && slug) {
      const post = { ...file.metadata, slug } satisfies Post;

      if (post.published) posts.push(post);
    }
  }

  const sorted = posts.sort((a, b) => {
    const timeA = new Date(a.date).getTime();
    const timeB = new Date(b.date).getTime();


    return timeA - timeB;
  });

  return sorted;
}
