import { createClient, groq } from "next-sanity";
import { projectType } from "@/types/projectType";


export async function getProjects():Promise<projectType[]>{
    const client = createClient({
        projectId: 'im7a8cc2',
        dataset: "production",
        apiVersion: "2024-02-03",
        useCdn: false
    })

    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`, {revalidate: 60}
    )
}

export async function getProject(slug:string):Promise<projectType> {
    const client = createClient({
        projectId: 'im7a8cc2',
        dataset: "production",
        apiVersion: "2024-02-03",
        useCdn: false
    })

    return client.fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`, {slug}
    )
}