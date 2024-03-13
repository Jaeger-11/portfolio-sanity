import MotionDiv from "@/components/MotionDiv";

const page = () => {
  return (
    <div className="my-20 px-4 md:p-0  md:max-w-[90%] lg:max-w-[80%] mx-auto lg:flex lg:items-center justify-between">
        <MotionDiv initial={{x:-500, opacity: 0}} animate={{x:0, opacity:1}} transition={{duration:0.5, ease:"easeIn"}} className="text-3xl lg:text-5xl font-playfair">Get In Touch With Me <br /> <span className="text-lime">Let&apos;s Connect!</span>  </MotionDiv>
        <section className="contact-info">
            <MotionDiv initial={{y:500, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.5, ease:"easeOut"}}>
                <h4>github</h4>
                <h3><a href="http://github.com/Jaeger-11">Jaeger-11</a></h3>
            </MotionDiv>
            <MotionDiv initial={{y:500}} animate={{y:0}} transition={{duration:0.5, ease:"easeOut", delay:0.5}}>
                <h4>whatsApp / call</h4>
                <h3><a href="tel:+2348139017478">+2348139017478</a></h3>
            </MotionDiv>
            <MotionDiv initial={{y:500}} animate={{y:0}} transition={{duration:0.5, ease:"easeOut",delay:1}}>
                <h4>email</h4>
                <h3><a href="mailto:damifalodun@gmail.com">damifalodun@gmail.com</a></h3>
            </MotionDiv>
            <MotionDiv initial={{y:500}} animate={{y:0}} transition={{duration:0.5, ease:"easeOut", delay:1.5}}>
                <h4>linkedin</h4>
                <h3><a href="https://www.linkedin.com/in/oluwadamilola-falodun-b084221a8/">Oluwadamilola Falodun</a></h3>
            </MotionDiv>
        </section>
    </div>
  )
}

export default page;