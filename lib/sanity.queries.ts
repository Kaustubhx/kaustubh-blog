import { groq } from "next-sanity";

export const POSTS_QUERY = groq`
*[_type == "post"] {
    ...,
    author->,
    category[]->
}
`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;