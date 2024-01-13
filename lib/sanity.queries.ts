import { groq } from "next-sanity";

export const POSTS_QUERY = groq`
*[_type == "post"] {
    ...,
    author->,
    categories[]->
}
`;

export const BLOG_QUERY = groq`
    *[_type == "post" && slug.current == $slug][0] {
        ...,
        author->,
        categories[]->
    }
`;