import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default async function Project({params}:{
    params:{project:string}
}){
    const project = await getProject(params.project)
    return (
            <article className="max-w-[90%] lg:max-w-[70%] mx-auto min-h-[70vh] md:min-h-[50vh]">
            <div className="md:flex items-center justify-between md:w-4/5 mx-auto my-4">
                <h2 className="text-3xl md:text-5xl font-playfair text-lime font-extrabold drop-shadow">{project.name}</h2>
                <a href={project.url} className="hidden md:block border py-1 px-4 transition-all font-bold text-base font-playfair cursor-pointer text-dark-color dark:text-grey border-dark-color dark:border-grey hover:bg-lime hover:text-grey dark:hover:text-dark-color">View Project</a>
            </div>
            <div className="mt-10">
                <Image 
                src={project.image}
                alt="site"
                height={200}
                width={200}
                className="w-4/5 md:mx-auto rounded-md"
                />
            </div>
            <div className="my-4">
                 <PortableText value={project.content}/>
            </div>
            <a href={project.url} className="md:hidden my-6 block w-max border py-1 px-4 transition-all font-bold text-base font-playfair cursor-pointer text-dark-color dark:text-grey border-dark-color dark:border-grey hover:bg-lime hover:text-grey dark:hover:text-dark-color">View Project</a>
        </article>
    )
}