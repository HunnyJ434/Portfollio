import xIcon from "./Images/Button_x.svg"
import { NavLink } from "react-router-dom";
import starBg from "./Images/PngItem_24440.png"
import homeIcon from "./Images/Home-icon.svg"
import projectIcon from "./Images/noun-project-5412452.svg"
import contactIcon from "./Images/noun-contact-1214368.svg"

function NavBurger(props) {
  
  const navStyle = {
    backgroundImage: `url(${starBg})`, 
    backgroundPosition:"center",
    backgroundRepeat: "no-repeat",
    backgroundSize:"100%",
  }

    return !props.trigger ? (
      <div className="w-[7rem] h-[20rem] flex flex-col">
        <button style={navStyle} className='ml-[2rem] my-[0.1rem] w-[4rem] h-[5rem] hover:w-[5rem] hover:mx-[1.5rem] hover:p-[0.5rem] hover:duration-500 hover:ease-in-out  hover:transition-all' onClick={() => props.setTrigger(true)}><img className="w-[1rem] ml-[1.5rem]  h-[1rem]" alt="cross icon" src={xIcon}></img></button>
        <NavLink style={navStyle}  exact="true" activeclassname="active" to="/" className="text-[#ed3f39] font-semibold mx-[2rem] p-[1rem] bg-opacity-5 w-[4rem] h-[4rem] hover:w-[5rem] hover:h-[5rem] hover:mx-[1.5rem] hover:p-[1.4rem] hover:duration-500 hover:ease-in-out  hover:transition-all"><img alt="home icon" className="ml-[0.33rem] mt-[0.3] w-[1.5rem] h-[1.5rem]" src={homeIcon}></img><h1 className="text-[#ede8ed] ml-[-0.2rem] mt-[-2rem] pt-[2.3rem] h-[5rem] w-[6rem] pr-[3.5rem] opacity-0 hover:opacity-[100] relative z-[100]">Home</h1></NavLink>
        <NavLink style={navStyle}  exact="true" activeclassname="active" to="/" className="text-[#ed3f39] font-semibold mx-[2rem] p-[1rem] bg-opacity-5 w-[4rem] h-[4rem] hover:w-[5rem] hover:h-[5rem] hover:mx-[1.5rem] hover:p-[1.4rem] hover:duration-500  ease-out  hover:transition-all"><img alt="Project icon" className=" w-[2.5rem] h-[2.5rem]" src={projectIcon}></img><h1 className="text-[#ede8ed] ml-[-0.7rem] mt-[-3rem] pt-[2.3rem] h-[5rem] w-[6rem] pr-[3.5rem] opacity-0 hover:opacity-[100] relative z-[100]">Projects</h1></NavLink>
        <NavLink style={navStyle}  exact="true" activeclassname="active" to="/contact" className="text-[#ed3f39] font-semibold mx-[2rem] p-[1rem] bg-opacity-5 w-[4rem] h-[4rem] hover:w-[5rem] hover:h-[5rem] hover:mx-[1.5rem] hover:p-[1.4rem] hover:duration-500  ease-out  hover:transition-all"><img alt="Contact icon" className=" w-[3rem] h-[3rem] mt-[-0.3rem]" src={contactIcon}></img><div className="opacity-0 hover:opacity-[100] relative z-[100]"><h1 className="text-[#ede8ed] ml-[-0.7rem] mt-[-3rem] pt-[2.1rem] h-[3rem] w-[6rem] pr-[3.5rem] ">Contact</h1><p className="w-[3rem] text-[0.8rem] mt-[0.4rem] ml-[-0.4rem]">me :)</p></div></NavLink>
      </div>
    ): <></>;
  }
  
  export default NavBurger;
  