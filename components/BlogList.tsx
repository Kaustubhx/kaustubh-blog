import urlFor from "@/lib/sanity.client";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import ClientSideRoute from "./ClientSideRoute";

export default function BlogList({ posts }: { posts: SanityDocument[] | Post[] }) {
    return (
        <>
            <hr className="border border-neutral-900/40 mb-10" />

            <div className="grid grid-cols-1 md:grid-cols-2 px-5 sm:px-10 gap-x-10 gap-y-16 pb-24">
                {posts.map((post) => (
                    <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
                        <div className="group flex flex-col cursor-pointer">
                            <div className="relative w-full h-[18.5rem] md:h-[17.5rem] lg:h-[22.5rem] drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                                <Image
                                    className="object-contain object-top xl:object-cover xl:object-center"
                                    src={urlFor(post.mainImage).url()}
                                    alt={post.author.name}
                                    fill
                                />
                                <div className="flex absolute bottom-0 w-full xl:bg-opacity-20 bg-black xl:backdrop-blur-lg rounded drop-shadow-lg text-white p-5 justify-between">
                                    <div>
                                        <p className="font-bold">{post.title}</p>
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

                                    <div className="flex flex-col lg:flex-row gap-y-2 md:gap-x-2 items-center">
                                        {post.categories.map((category: Category) => (
                                            <div key={category._id} className="bg-neutral-900 text-center text-neutral-100 px-3 py-1 rounded-full text-sm font-semibold">
                                                <p>{category.title}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 flex-1 space-y-2">
                                <p className="underline text-lg font-bold">{post.title}</p>
                                <p className="text-gray-500 line-clamp-2">{post.description}</p>
                            </div>

                            <p className="flex items-center font-bold group-hover:underline">
                                Read Post
                                <ArrowRightIcon className="ml-2 h-4 w-4" />
                            </p>
                        </div>
                    </ClientSideRoute>
                ))}
            </div>
        </>
    );
}