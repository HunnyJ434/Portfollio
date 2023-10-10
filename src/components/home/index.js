import { useState } from "react";

function Home() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [delay, setDelay] = useState(false);
  setTimeout(() =>{
    setDelay(true)
  },1000)
  return (
    <div>
          <button className={`rounded-[3rem] bg-sky-500/10 text-white overflow-hidden ${isScrolled? "hidden":""} ${delay? "duration-3000  ease-out  transition-all mt-[4rem]" : "mt-0"} ${delay? "w-[55%] duration-1000  ease-out  transition-all " : " w-0"} md:text-[2rem] lg:text-[3rem]`} onClick={()=> setIsScrolled(true)}>
            Hi there! <span className=" text-[#f01d32] text-bold text-bold hover:text-[3.3rem] hover:duration-500 hover:ease-in-out  hover:transition-all">thank you</span> for visiting my personal<span className="text-[#f01d32] text-bold text-bold hover:text-[3.3rem] hover:duration-500 hover:ease-in-out  hover:transition-all"> website</span>, click on text to <span className="text-[#f01d32] text-bold text-bold hover:text-[3.3rem] hover:duration-500 hover:ease-in-out  hover:transition-all">explore </span>more.
          </button>
          <div className={`w-[70%]  m-auto h-[32rem] transition-all duration-1000 ${isScrolled? "rounded-[3rem] bg-sky-500/10" : "bg-transparent"}`}>
            <h1 className={` transition-all duration-1000 ${isScrolled? "text-[3rem]" : "text-[0.5rem] text-transparent"}`}>Random Text </h1>
      </div>
      
    </div>
  );
}

export default Home;
