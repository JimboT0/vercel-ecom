import { createClient, groq } from "next-sanity";
import { apiVersion, projectId } from "./env";
import { Project } from "@/types/Project";
import { Page } from "@/types/Page"

export async function getProjects(): Promise<Project>{

    const client = createClient({

        projectId:'9r26prt5',
        dataset: 'production',
        apiVersion:'2024-04-10',

    });

    return client.fetch(
        groq`*[_type == "project"]{
           _id,
           _createdAt,
           name,
           "slug": slug.current,
           "image": image.asset->url,
           url,
           content
        }`
    )

    

}

export async function getProject(slug: string): Promise<Project> {
    

    const client = createClient({

        projectId:'9r26prt5',
        dataset: 'production',
        apiVersion:'2024-04-10',

    });

    return client.fetch(

    groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
      }`,
      { slug }
    )
  }

