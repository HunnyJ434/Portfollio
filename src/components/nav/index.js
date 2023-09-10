import logoH from "./Images/logo.jpg"
import logoU from "./Images/095701424699.jpg"
import logoN from "./Images/25200678_7073822.jpg"
import logoY from "./Images/25200669_7075047.jpg"
import starBg from "./Images/PngItem_24440.png"
import { Link, NavLink } from "react-router-dom";
import homeIcon from "./Images/Home-icon.svg"
import projectIcon from "./Images/noun-project-5412452.svg"
import contactIcon from "./Images/noun-contact-1214368.svg"
import burgerIcon from "./Images/hamburger.png"
import { useState, useEffect } from "react"
import NavBurger from "../common/nav-burger/index"

function Nav() {
  const navStyle = {
    backgroundImage: `url(${starBg})`, 
    backgroundPosition:"center",
    backgroundRepeat: "no-repeat",
    backgroundSize:"100%",
  }
  const [burgerButton, setBurgerButton] = useState(true);
  const [iconToggle, setIconToggle] = useState(true);

  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState(1200);
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize(window.innerWidth);
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

useEffect(() => {
  console.log("hi")
  if(window.innerWidth < 620){
    setBurgerButton(false);
  }
  else{
    setBurgerButton(true)
  } 
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [useWindowSize()])

  
  return (

    <div className="w-[100%]  flex h-[4.5rem] justify-between">
      <div className="flex">
        <Link to="/" className="flex bg-[black] hover:mr-[9.9rem] z-30 transition   duration-[3000]  hover:transition-all"><img alt="website logo" className="rounded-lg w-[3rem] m-[10px] " src={logoH}></img></Link>
        <div className="text-[#ed3f39] z-20 h-[4rem] w-[10rem] ml-[-10rem]  pt-[2.2rem] hover:w-[9rem] overflow-x-scroll flex no-scrollbar transition ease-out hover:duration-1000  hover:transition-all">
          <img alt="website logo" src={logoU} className="w-[1.9rem] rounded-md h-[1.6rem] hover:ml-[4rem] mx-[0.15rem]"></img>
          <img alt="website logo" src={logoN} className="w-[1.9rem] rounded-md h-[1.6rem]  mx-[0.15rem]"></img>
          <img alt="website logo" src={logoN} className="w-[1.9rem] rounded-md h-[1.6rem]  mx-[0.15rem]"></img>
          <img alt="website logo" src={logoY} className="w-[1.9rem] rounded-md h-[1.6rem]  mx-[0.15rem]"></img>
        </div>
      </div>
     {burgerButton?
      <div className="Nav-btn-container p-[0.5rem] flex">
        <NavLink style={navStyle}  exact="true" activeclassname="active" to="/" className="text-[#ed3f39] font-semibold mx-[2rem] p-[1rem] bg-opacity-5 w-[4rem] h-[4rem] hover:w-[5rem] hover:h-[5rem] hover:mx-[1.5rem] hover:p-[1.4rem] hover:duration-500 hover:ease-in-out  hover:transition-all"><img alt="home icon" className="ml-[0.33rem] mt-[0.3] w-[1.5rem] h-[1.5rem]" src={homeIcon}></img><h1 className="text-[#ede8ed] ml-[-0.2rem] mt-[-2rem] pt-[2.3rem] h-[5rem] w-[6rem] pr-[3.5rem] opacity-0 hover:opacity-[100] relative z-[100]">Home</h1></NavLink>
        <NavLink style={navStyle}  exact="true" activeclassname="active" to="/" className="text-[#ed3f39] font-semibold mx-[2rem] p-[1rem] bg-opacity-5 w-[4rem] h-[4rem] hover:w-[5rem] hover:h-[5rem] hover:mx-[1.5rem] hover:p-[1.4rem] hover:duration-500  ease-out  hover:transition-all"><img alt="Project icon" className=" w-[2.5rem] h-[2.5rem]" src={projectIcon}></img><h1 className="text-[#ede8ed] ml-[-0.7rem] mt-[-3rem] pt-[2.3rem] h-[5rem] w-[6rem] pr-[3.5rem] opacity-0 hover:opacity-[100] relative z-[100]">Projects</h1></NavLink>
        <NavLink style={navStyle}  exact="true" activeclassname="active" to="/contact" className="text-[#ed3f39] font-semibold mx-[2rem] p-[1rem] bg-opacity-5 w-[4rem] h-[4rem] hover:w-[5rem] hover:h-[5rem] hover:mx-[1.5rem] hover:p-[1.4rem] hover:duration-500  ease-out  hover:transition-all"><img alt="Contact icon" className=" w-[3rem] h-[3rem] mt-[-0.3rem]" src={contactIcon}></img><div className="opacity-0 hover:opacity-[100] relative z-[100]"><h1 className="text-[#ede8ed] ml-[-0.7rem] mt-[-3rem] pt-[2.1rem] h-[3rem] w-[6rem] pr-[3.5rem] ">Contact</h1><p className="w-[3rem] text-[0.8rem] mt-[0.4rem] ml-[-0.4rem]">me :)</p></div></NavLink>
      </div> : 
      <div>
        {iconToggle?
        <button className="w-[5rem] h-[5rem]" style={navStyle} onClick={() => setIconToggle(!iconToggle)}><img className='rounded-full ml-[1rem] w-[3rem] h-[3rem] bg-[white] ' alt="burger icon " src={burgerIcon}></img></button> : <NavBurger trigger={iconToggle} setTrigger={setIconToggle}/>}
      </div>
    }
    </div>
  );
}

export default Nav;
