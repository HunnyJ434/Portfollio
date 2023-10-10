import fishImg from "./Images/fish.png"
import tttImg from "./Images/tic-tac-toe.png"
import cTranslateImg from "./Images/cTranslate.png"

function Projects() {

    return(
        <div className="m-auto mt-[1rem] pt-[1rem] px-4 rounded-[1.5rem] bg-white opacity-50 w-[90%] h-[85vh] ">
            <div className="flex   border-b-[1.5px]">
                <img className="w-[10rem] rounded-lg h-[9rem] bg-black" src={fishImg} alt="project Pic"></img>
                <div className="mx-4">
                    <h1 className="text-left font-bold text-[1.1rem]">Big Fish</h1>
                    <p className="text-left py-3 font-semibold h-[6.5rem]">An Object-oriented Reactjs project implementing vanilla javascript and canvas libre. Various react components acting as classes used canvas graphics to generate a self-scrolling game. Visit the site to give it a try.</p>
                    <a target="_blank" rel="noreferrer" href="https://github.com/HunnyJ434/BigFish"  className="ml-[72%] mr-[1rem] hover:mr-[0] hover:bg-[#f1f72a] hover:text-[1.1rem] rounded-xl hover:p-[0.5rem] w-[7rem]  opacity-100  h-[3rem] hover:duration-500 hover:ease-in-out  hover:transition-all">Visit Git-Repo</a>
                    <a target="_blank" rel="noreferrer" href="https://hunnyj434.github.io/BigFish/" className="  hover:bg-[#f1f72a] hover:text-[1.1rem] rounded-xl hover:p-[0.5rem] w-[7rem]  opacity-100  h-[3rem] hover:duration-500 hover:ease-in-out  hover:transition-all">Visit Site</a>
                </div>
            </div>
            <div className="flex my-4 border-b-[1.5px]">
                <img className="w-[10rem] rounded-lg h-[9rem] bg-black" src={cTranslateImg} alt="project Pic"></img>
                <div className="mx-4">
                    <h1 className="text-left font-bold text-[1.1rem]">Cloud Translator</h1>
                    <p className="text-left py-3 h-[6.5rem]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                    <a target="_blank" rel="noreferrer" href="https://github.com/HunnyJ434/groupProject"  className="ml-[72%] mr-[1rem] hover:mr-[0] hover:bg-[#f1f72a] hover:text-[1.1rem] rounded-xl hover:p-[0.5rem] w-[7rem]  opacity-100  h-[3rem] hover:duration-500 hover:ease-in-out  hover:transition-all">Visit Git-Repo</a>
                    <a target="_blank" rel="noreferrer" href="https://translator-weld-ten.vercel.app/" className="  hover:bg-[#f1f72a] hover:text-[1.1rem] rounded-xl hover:p-[0.5rem] w-[7rem]  opacity-100  h-[3rem] hover:duration-500 hover:ease-in-out  hover:transition-all">Visit Site</a>
                </div>
            </div>
            <div className="flex my-4 border-b-[1.5px]">
                <img className="w-[10rem] rounded-lg h-[9rem] bg-black" src={tttImg} alt="project Pic"></img>
                <div className="mx-4">
                    <h1 className="text-left font-bold text-[1.1rem]">Tic Tac Toe</h1>
                    <p className="text-left py-3 h-[6.5rem]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                    <a target="_blank" rel="noreferrer" href="https://github.com/HunnyJ434/TicTacToe"  className="ml-[72%] mr-[1rem] hover:mr-[0] hover:bg-[#f1f72a] hover:text-[1.1rem] rounded-xl hover:p-[0.5rem] w-[7rem]  opacity-100  h-[3rem] hover:duration-500 hover:ease-in-out  hover:transition-all">Visit Git-Repo</a>
                    <a target="_blank" rel="noreferrer" href="https://hunnyj434.github.io/TicTacToe//" className="  hover:bg-[#f1f72a] hover:text-[1.1rem] rounded-xl hover:p-[0.5rem] w-[7rem]  opacity-100  h-[3rem] hover:duration-500 hover:ease-in-out  hover:transition-all">Visit Site</a>
                </div>
            </div>
        </div>
    );
}

export default Projects;