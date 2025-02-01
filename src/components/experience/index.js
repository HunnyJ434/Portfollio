import SJimg from "./Images/sj.png"
import Sliike from "./Images/sliike.png"
function Experience() {
 

  return (
    <div className="m-auto mt-[1rem] pt-[1rem] px-4 rounded-[1.5rem] z-1  w-[90%] ">
        <h1 className="text-center text-[2.5rem] text-black">Work Experience</h1>
        <div className="flex ">
         <img className="w-[12rem] rounded-lg h-[9rem] mt-[50%] sm:mt-[16%] lg:mt-10" src={SJimg} alt="project Pic"></img>
            <div className="flex bg-white opacity-70 pb-5 border-b-[1.5px]">
                <div className="mx-4  w-[100%]">
                    <h1 className="text-left font-bold text-[1.1rem]">Full Stack Developer</h1>
                    <h1 className="text-left font-bold text-[1.1rem]">Self Justice</h1>
                    <ul className="text-left list-disc ml-5 mb-5">
                        <li>Developed several legal support calculators’ back-end in Python. Hosted the APIs on Google cloud app engine and
                        connected it to WordPress front-end forms.</li>
                        <li>Build, using JavaScript and Python, a complete legal AI chat-bot which uses PDFs as its source of information for
                        communicating with the users (used ChatPDF as the back-end)</li>
                        <li>Created around 80 forms which fills the legal documents and let user download the filled PDF upon completion. All
                        forms included e-signature for user convenience</li>
                        <li>All the above products are only available to the premium users of Self Justice</li>
                    </ul>
                    <a target="_blank" rel="noreferrer" href="https://selfjustice.ca/"  className="text-[0.6rem]  md:text-[0.9rem] lg:text-[1.1rem]    sm:ml-[50%] lg:ml-[69%] ml-[3rem] mr-[1rem] hover:mr-[0] hover:bg-[#f1f72a] hover:text-[0.7rem] md:hover:text-[1rem] lg:hover:text-[1.2rem] rounded-xl hover:p-[0.5rem] w-[7rem]  opacity-100  h-[3rem] hover:duration-500 hover:ease-in-out  hover:transition-all">Visit Company Website</a>
                </div>
            </div>
            </div>
            <div className="flex">
         <img className="w-[12rem] rounded-lg h-[9rem]  mt-[50%] sm:mt-[16%] lg:mt-10" src={Sliike} alt="project Pic"></img>
            <div className="flex bg-white opacity-70  pb-5 border-b-[1.5px] ">
                <div className="mx-4  w-[100%]">
                    <h1 className="text-left font-bold text-[1.1rem]">Full Stack Developer</h1>
                    <h1 className="text-left font-bold text-[1.1rem]">Sliike</h1>
                    <ul className="text-left list-disc ml-5 mb-5">
                        <li>Worked on Turbo which uses three NextJs app simultaneously. Connected MongoDB to app and developed dashboard
                        for user’s profile using Nextjs Authentication
                        </li>
                        <li>Played a pivotal role in an agile environment, actively contributing to sprint cycles. Developed components like dynamic
                        looping Hero section video, promotional discount pop-up tab, and self scrolling carousel, content of which could be
                        controlled using Sanity.Io
                        </li>
                        <li>Connected Sanity as a content management system to the app, so stakeholders can easily manage the content without
                        knowing how to code</li>
                    </ul>
                    <a target="_blank" rel="noreferrer" href="https://sliike.com/"  className="text-[0.6rem]   md:text-[0.9rem] lg:text-[1.1rem]    sm:ml-[50%] lg:ml-[69%] ml-[3rem] mr-[1rem] hover:mr-[0] hover:bg-[#f1f72a] hover:text-[0.7rem] md:hover:text-[1rem] lg:hover:text-[1.2rem] rounded-xl hover:p-[0.5rem] w-[7rem]  opacity-100  h-[3rem] hover:duration-500 hover:ease-in-out  hover:transition-all">Visit Company Website</a>
                </div>
            </div>
            </div>
  </div>
 
  );
}

export default Experience;



