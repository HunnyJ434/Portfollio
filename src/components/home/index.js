import { useState } from "react";
import resume from "./Resume.pdf"

function Home() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [delay, setDelay] = useState(false);
  setTimeout(() =>{
    setDelay(true)
  },1000)
  return (
    <div>
          <button className={`px-[3rem] md:px-3 rounded-[1rem] md:rounded-[1.5rem] lg:rounded-[3rem] bg-sky-500/10 text-white overflow-hidden ${isScrolled? "hidden":""} ${delay? "duration-3000  ease-out  transition-all mt-[4rem]" : "mt-0"} ${delay? "w-[65%] lg:w-[60%] duration-1000  ease-out  transition-all " : " w-0"} md:text-[1.8rem] lg:text-[2.3rem] xl:text-[3rem]`} onClick={()=> setIsScrolled(true)}>
            Hi there! <span className=" text-[#f01d32] text-bold text-bold hover:text-[1.3rem] md:hover:text-[3.3rem] hover:duration-500 hover:ease-in-out  hover:transition-all">thank you</span> for visiting my personal<span className="text-[#f01d32] text-bold text-bold hover:text-[1.3rem] md:hover:text-[3.3rem] hover:duration-500 hover:ease-in-out  hover:transition-all"> website</span>, click on text to <span className="text-[#f01d32] text-bold text-bold hover:text-[1.3rem] md:hover:text-[3.3rem] hover:duration-500 hover:ease-in-out  hover:transition-all">explore </span>more.
          </button>
          <div className={`w-[75%]  m-auto h-[32rem] pt-[3rem] transition-all duration-1000 ${isScrolled? "rounded-[3rem] bg-sky-500/20" : "bg-transparent"}`}>
            <h1 className={`mx-[1.8rem] sm:mx-[2.3rem] md:mx-[2.6rem] lg:mx-[3.5rem]  transition-all duration-1000 ${isScrolled? "xl:text-[3rem] lg:text-[2.7rem] md:text-[2rem] text-[1.5rem] text-white" : "text-[0.5rem] text-transparent"} `}>Hello, my name is Hunny Jaglen, and I'm a specialized React/NextJs web developer. You can download my Resume <a className={`${isScrolled? "text-[#f01d32]" : "text-transparent"} text-bold text-bold hover:text-[1.8rem] md:hover:text-[2.3rem] lg:hover:text-[3.0rem] xl:hover:text-[3.3rem]  hover:duration-500 hover:ease-in-out  hover:transition-all`} href={resume} download> here</a>. Also, feel free to <a href="./contact" className={`${isScrolled? "text-[#f01d32]" : "text-transparent"} text-bold text-bold hover:text-[1.8rem] md:hover:text-[2.3rem] lg:hover:text-[3.0rem] xl:hover:text-[3.3rem] hover:duration-500 hover:ease-in-out  hover:transition-all`}>contact</a> me or look at my <a href="./projects" className={`${isScrolled? "text-[#f01d32]" : "text-transparent"} text-bold text-bold hover:text-[1.8rem] md:hover:text-[2.3rem] lg:hover:text-[3.0rem] xl:hover:text-[3.3rem] hover:duration-500 hover:ease-in-out  hover:transition-all`}>projects</a>.  </h1>
      </div>
      
    </div>
  );
}

export default Home;
