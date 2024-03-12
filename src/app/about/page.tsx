import Image from "next/image";
import Link from "next/link";
const page = () => {
  return (
    <div className="my-20 px-4 md:p-0  md:max-w-[90%] lg:max-w-[80%] mx-auto lg:flex gap-8 lg:items-center justify-between">
      <div>
        <Image className="rounded-md shadow-xl" src="/1.jpg" width={300} height={300} alt="profile" quality={100} />
      </div>

      <article className="flex-1 font-open-sans">
        <h2 className="font-playfair text-lime text-xl md:text-2xl mb-4 font-bold">About Me</h2>
        <p className="text-justify">
          I am Oluwadamilola Falodun, most people call me Dami. I am a frontend developer and JavaScript Buddy who is going to be a FullStack Software Engineer soon. Well I don&apos;t spend all my days coding, I enjoy watching Anime, Movies and catching up with Series, and frequently checking up on the latest on X(Twitter). 
          <br/> I also enjoy learning and gathering experiences from building projects. Also the thrill from coding with just the sound of music at the peace and quiet of night. Still want to know more about me, check out my socials.
        </p>
        <p className="text-lime mt-4 text-right italic font-bold"><Link href={'/contact'}>Connect with me...</Link></p>
      </article>
      
    </div>
  )
}

export default page