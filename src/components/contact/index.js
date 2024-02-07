import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function ContactMe() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5x89ijg', 'template_w9i2ydg', form.current, 'WbJdtxsA4iPxbLIIZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div className="contact-form p-[1rem] md:p-0 md:flex justify-between mt-2">
     
      <div className='form-container w-[80%] md:w-[40%]'>
      <h1 className='text-[3rem] text-white text-left m-2'>Contact Me :<span className='text-[#f01d32]'>)</span></h1> 
      <p className='text-white hidden md:block m-2 mx-3 text-left font-semibold w-[100%] md:w-[22rem]'>I'm a fourth year <span className='text-[#f01d32] text-bold hover:text-[1.3rem] hover:duration-500 hover:ease-in-out  hover:transition-all'>Computer Science</span> student, and a professional <span className='text-[#f01d32] text-bold text-bold hover:text-[1.3rem] hover:duration-500 hover:ease-in-out  hover:transition-all'>Web Developer</span>. Ping me a message for business inqury.</p>
        <form className='flex flex-col ' ref={form} onSubmit={sendEmail}>
          <input className='w-[25rem] md:w-[18rem] m-2 mx-3 rounded-md p-1' type="text" placeholder='Name' name="name" />
          <input className='w-[25rem] md:w-[18rem] m-2 mx-3 rounded-md p-1' placeholder='Email' type="email" name="email" />
          <textarea className='w-[25rem] lg:w-[30rem] h-[12rem] m-2 mx-3 rounded-md p-1' placeholder='Message' name="message" />
          <input className='w-[18rem] rounded-md bg-[white] p-1 mx-3 cursor-pointer hover:w-[20rem] hover:translate-y-2 hover:bg-[#ffd700] hover:duration-500 hover:ease-in-out  hover:transition-all ' type="submit" value="Send" />
        </form>
    </div>
    <div className="map-wrap mr-[1rem]   md:w-[40%] xl:w-[56%] h-[30rem] mt-[1.5rem]">
          <MapContainer className='z-10 rounded-[3rem]  w-[100%] h-[100%]' center={[48.4355143, -89.2533511]} zoom={11}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[48.4355143, -89.2533511]}>
                  <Popup>
               Ya boy lives here <br />
          </Popup>
            </Marker>
          </MapContainer>
          <div className='absolute top-[29.5rem] md:top-[1.5rem] w-[14rem] h-[5.5rem] rounded-[3rem] p-3 z-[1000] bg-[white]'>
        <p>Hunny</p>
        <p>fhunny@lakeheadu.ca</p>
        <p>+1 (807) 627 0983</p>
      </div>
        </div>

  </div>
 
  );
}

export default ContactMe;
