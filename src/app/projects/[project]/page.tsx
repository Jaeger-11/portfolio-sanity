import { getProject } from "@/sanity/sanity-utils"

export default async function Project({params}:{
    params:{project:string}
}){
    const project = await getProject(params.project)
    return (
        <div>PROJECCTTTT {project.name}</div>
    )
}