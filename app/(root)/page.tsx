import { SanityDocument } from "next-sanity";
import { loadQuery } from "@/lib/sanity.store";
import { POSTS_QUERY } from "@/lib/sanity.queries";
import { draftMode } from "next/headers";
import BlogList from '@/components/BlogList';
import PreviewBlogList from "@/components/PreviewBlogList";

export default async function Home() {

  const initial = await loadQuery<SanityDocument[]>(POSTS_QUERY, {}, {
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
  });

  return (
    <main className="flex">
      {
        draftMode().isEnabled ? (
          <PreviewBlogList initial={initial} />
        ) : (
          <BlogList posts={initial.data} />
        )
      }
    </main>
  )
}
