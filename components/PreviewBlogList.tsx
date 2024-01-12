"use client";

import { POSTS_QUERY } from "@/lib/sanity.queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
import BlogList from "./BlogList";

export default function PreviewBlogList({
    initial,
}: {
    initial: QueryResponseInitial<SanityDocument[]>;
}) {
    const { data } = useQuery<SanityDocument[] | null>(
        POSTS_QUERY,
        {},
        { initial }
    );

    return data ? (
        <BlogList posts={data} />
    ) : (
        <div className="bg-red-100">No posts found</div>
    );
}