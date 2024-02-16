import { PortableTextBlock } from "sanity";

export type projectType = {
    _id: string
    name: string
    _createdAt: Date
    slug: string
    image: string
    url: string
    content: PortableTextBlock[]
  }