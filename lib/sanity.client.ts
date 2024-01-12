import { createClient } from "@sanity/client/stega";

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION as string;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET as string;
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string;

export const client = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn: false,
    // These settings will be overridden in 
    // ./sanity/lib/store.ts when draftMode is enabled
    perspective: "published",
    stega: {
        enabled: false,
        studioUrl: "/studio",
    },
    token: process.env.SANITY_API_READ_TOKEN
});