import Skills from "@/components/Skills";
import { getProjects } from "@/sanity/sanity-utils";
import MotionDiv from "@/components/MotionDiv";
import Link from "next/link";

export default async function Home() {
  let projects = await getProjects();
  let revProjects = projects.reverse();
  const name = "Falodun".split("");
  const name2 = "Oluwadamilola".split("");

  return (
    <div className="flex flex-col px-4 md:p-0  md:max-w-[90%] lg:max-w-[80%] mt-6 mx-auto font-open-sans text-dark-color dark:text-grey">
      <MotionDiv 
        initial={{x:-100}}
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 1.5 }} 
        className="py-20">
        <h3 className="text-base md:text-xl font-bold">
        <span className="text-lime">HEY, I&apos;M</span> <br />
          {name.map((el, i) => (
          <MotionDiv
          className="text-3xl lg:text-6xl font-playfair inline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 10
            }}
            key={i}
          >
            {el}
          </MotionDiv>
          ))}
          <br />
          {name2.map((el, i) => (
          <MotionDiv
          className="text-3xl lg:text-6xl font-playfair inline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 5
            }}
            key={i}
          >
            {el}
          </MotionDiv>
          ))}
        </h3>
        <p className="mt-3 bg-lime text-sm md:text-base text-white w-max p-4 bg-gradient-to-r from-[lime] to-gray-500 font-bold">A Frontend Developer.</p>
      </MotionDiv>

      <Skills />

      <div className="mt-20 gap-8" id="projects">
        <h2 className="text-right text-lg md:text-3xl capitalize italic font-julee text-gray-500">...Some Personal Projects</h2>
        <section className=" mt-5 md:mt-10 grid grid-cols-1 gap-2 md:gap-2">
          {revProjects.map((project) => {
            return (
              <MotionDiv key={project._id} initial={{opacity: 0.2}} whileInView={{opacity:1, transition: {delay:1, duration:1}}}>
                <h3 className="text-3xl md:text-5xl md:p-4 font-julee uppercase font-bold w-max hover:scale-105 hover:text-lime transition-all">
                  <Link href={`/projects/${project.slug}`} key={project._id}>
                    {project.name}
                  </Link>
                </h3>
              </MotionDiv>
            )
          })}
        </section>
      </div>

      <div className="my-20 md:my-40 text-3xl md:text-6xl md:p-4 w-4/5 md:w-2/3 font-playfair text-center mx-auto">
          <h2 className="mb-4">You&apos;ve a work for me, or want to collaborate</h2>
          <Link href={'/contact'} className="border text-lg p-2 md:text-2xl md:p-4 transition-all font-bold text-grey border-lime shadow-lg bg-lime hover:bg-transparent hover:text-lime hover:border-lime hover:border-2">GET IN TOUCH</Link>
      </div>

      
    </div>
  );
}
