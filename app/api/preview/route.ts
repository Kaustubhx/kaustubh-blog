import { validatePreviewUrl } from "@sanity/preview-url-secret";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

import { client } from "@/lib/sanity.client";
import { token } from "@/lib/sanity.token";

const clientWithToken = client.withConfig({ token });

export async function GET(request: Request) {

    draftMode().enable();

    redirect("/");
}