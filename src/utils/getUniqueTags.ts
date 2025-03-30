import type { CollectionEntry } from "astro:content";

export const getUniqueTags = (posts: CollectionEntry<"blog">[]) => {
  const tags: string[] = posts.flatMap((post) => post.data.tags);

  // Get unique tags
  return [...new Set(tags)].sort((a, b) => a.localeCompare(b));
};
