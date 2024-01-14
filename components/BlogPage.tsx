import urlFor from '@/lib/sanity.client'
import { SanityDocument } from 'next-sanity'
import Image from 'next/image'
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from './RichTextComponents';

type Props = {
    post: SanityDocument | Post
}

function BlogPage({ post }: Props) {
    return (
        <article className='px-5 sm:px-10 pb-28 prose prose-lg'>
            <section className='space-y-2 border border-neutral-900/40 text-white'>
                <div className='relative min-h-56 flex flex-col md:flex-row justify-between'>
                    <div className='absolute top-0 w-full h-full opacity-10 blur-sm p-10'>
                        <Image
                            className='object-cover object-center mx-auto'
                            src={urlFor(post.mainImage).url()}
                            alt=''
                            fill
                        />
                    </div>

                    <section className='p-5 bg-neutral-900/40 w-full'>
                        <div className='flex flex-col md:flex-row justify-between gap-y-5'>
                            <div>
                                <h1 className='text-4xl font-extrabold'>
                                    {post.title}
                                </h1>
                                <p>
                                    {new Date(post._createdAt).toLocaleDateString
                                        ("en-US", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric"
                                        })
                                    }
                                </p>
                            </div>
                            <div className='flex items-center space-x-2 '>
                                <div className='relative h-12 w-12'>
                                    <Image
                                        className='absolute rounded-full max-w-full h-auto object-cover'
                                        src={urlFor(post.author.image).url()}
                                        alt={post.author.name}
                                        fill
                                    />
                                </div>

                                <div className='w-64'>
                                    <h3 className='text-lg font-bold'>{post.author.name}</h3>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className='italic pt-10'>{post.description}</h2>
                            <div className='flex items-center justify-end mt-auto space-x-2'>
                                {post.categories.map((category: Category) => (
                                    <p
                                        key={category._id}
                                        className='bg-neutral-900 text-center text-neutral-100 px-3 py-1 rounded-full text-sm font-semibold mt-4'
                                    >
                                        {category.title}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            <PortableText value={post.body} components={RichTextComponents} />
        </article>
    )
}

export default BlogPage