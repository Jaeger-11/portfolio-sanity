import Skills from "@/components/Skills";
import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  let projects = await getProjects();
  let revProjects = projects.reverse()
  console.log(projects)

  return (
    <div className="flex flex-col px-4 md:p-0  md:max-w-[90%] lg:max-w-[80%] mt-6 mx-auto font-open-sans text-dark-color dark:text-grey">
      <main className="py-20">
        <h3 className="text-base md:text-xl font-bold">
          <span className="text-lime">HEY, I'M</span> <br />
          <span className="text-3xl lg:text-6xl font-playfair">Falodun <br /> Oluwadamilola</span>
        </h3>
        <p className="mt-3 bg-lime text-white w-max p-4 bg-gradient-to-r from-[lime] to-gray-500 font-bold">A Frontend Developer.</p>
      </main>

      <Skills />

      <div className="mt-20 gap-8">
        <h2 className="text-right text-lg md:text-3xl capitalize italic font-julee text-gray-500">...Some Personal Projects</h2>
        <section className=" mt-5 md:mt-10 grid grid-cols-1 gap-2 md:gap-4">
          {revProjects.map((project) => {
            return (
            <Link href={`/projects/${project.slug}`} key={project._id} className="w-max p-1 hover:scale-105 hover:text-lime transition-all">
                {/* <Image src={project.image} alt={project.name} width={500} height={300}/> */}
              <h3 className="text-3xl md:text-5xl md:p-4 font-julee uppercase font-bold">{project.name}</h3>
              </Link>)
          })}
        </section>
      </div>

      
    </div>
  );
}
