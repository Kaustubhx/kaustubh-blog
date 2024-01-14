import { client } from '@/lib/sanity.client';
import { BLOG_QUERY, POSTS_QUERY } from '@/lib/sanity.queries';
import { loadQuery } from '@/lib/sanity.store';
import { draftMode } from 'next/headers';
import { QueryParams, SanityDocument, groq } from 'next-sanity';
import PreviewBlogPage from '@/components/PreviewBlogPage';
import BlogPage from '@/components/BlogPage';

type Props = {
    params: {
        slug: string;
    }
}

export const revalidate = 0

export async function generateStaticParams() {

    const query = groq`
    *[_type == "post"] {
        slug
    }`;

    const slugs: Post[] = await client.fetch(query);
    const slugRoutes = slugs.map((slug) => slug.slug.current)

    return slugRoutes.map(slug => ({
        slug
    }))
}

export default async function PostPage({ params: { slug } }: Props) {

    const initial = await loadQuery<SanityDocument>(BLOG_QUERY, { slug }, {
        perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    });

    return (
        <>
            {
                draftMode().isEnabled ? (
                    <PreviewBlogPage initial={initial} slug={slug} />
                ) : (
                    <BlogPage post={initial.data} />
                )
            }
        </>
    )
}