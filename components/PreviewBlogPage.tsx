"use client"

import React from 'react'
import BlogPage from './BlogPage';
import { QueryResponseInitial, useQuery } from '@sanity/react-loader';
import { SanityDocument } from 'next-sanity';
import { BLOG_QUERY } from '@/lib/sanity.queries';

type Props = {
    initial: QueryResponseInitial<SanityDocument>;
    slug: string
}

function PreviewBlogPage({ initial, slug }: Props) {

    const { data } = useQuery<SanityDocument | null>(
        BLOG_QUERY,
        { slug },
        { initial }
    );

    return data ? (
        <BlogPage post={data} />
    ) : (
        <div className="bg-red-100">Post not found</div>
    );
}

export default PreviewBlogPage