import { motion} from 'framer-motion';
import hero from '../../assets/hero.jpg'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
import PixelProgressBar from '../Home/ProgressBar';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import NavBar from '../Home/NavBar';



const ContactPage = () => {
    const [showMain,setShowMain] = useState<boolean>(false);
    

//   const {scrollYProgress} = useScroll({
//       target:contactRef,
//         offset: ["start end", "end start"],
//   })

//   const contactY = useTransform(scrollYProgress,[0,1],[-800,0])
   
  return (

    <>
                {!showMain?<PixelProgressBar onComplete={()=>setShowMain(true)}/>
                :
                <Main/>
                }
            </>
    
)
}


const Main =()=>{
   const formRef = useRef<HTMLFormElement>(null);
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_wyhi13b',
        'template_b7kw5kr',
        formRef.current,
        'p9YMCtI8e_0I9qhF3'
      )
      .then(
        () => {
          setStatusMessage('✅ Message sent successfully!');
          formRef.current?.reset();
        },
        (error) => {
          console.error('EmailJS error:', error);
          setStatusMessage('❌ Failed to send message. Please try again.');
        }
      );
  };


    return <div className="Main bg-[#111]">
       <motion.section 
    id='contact-section' 
    className='w-screen h-max min-h-screen bg-[#111] mx-auto  '
    >
        {/* nav bar */}
        <div  className='fixed top-0 w-screen  whitespace-nowrap text-center  text-xl text-[#f3f3f3]  px-[100px] z-[1000] border-b-1 border-[#222] py-[30px] bg-[#111]'>
            <NavBar/>
            </div>
      <motion.div
      
      className='pt-[120px] px-[20%] '>
      <div>
        <div className='flex items-center gap-[30px] pb-[100px]'>
        <div className='w-[150px] h-[150px] rounded-full  '
        style={{backgroundImage:`url(${hero})`,
        backgroundSize:'cover',
        backgroundPosition:'center'}}>
          
        </div>
      <h1 className='w-[800px] text-[#eee] text-7xl font-medium '>Let&#8217;s cook up something <span className='text-[#5d5fe1]'>amazing.</span></h1>
      </div>
       
       {/* Form */}
          <form ref={formRef} onSubmit={sendEmail} className="flex items-center">
            <div>
              <div className="p-[30px] mb-[20px] border-b-2 border-[#ccc7] w-[500px]">
                <input
                  name="from_name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className="placeholder:text-xl placeholder:text-[#ccc7] w-full h-full border-none focus:outline-none text-[#eee] py-3 text-lg"
                />
              </div>

              <div className="p-[30px] mb-[20px] border-b-2 border-[#ccc7] w-[500px]">
                <input
                  name="from_email"
                  type="email"
                  placeholder="Your Email"
                  required
                  className="placeholder:text-xl placeholder:text-[#ccc7] w-full h-full border-none focus:outline-none text-[#eee] py-3 text-lg"
                />
              </div>

              <div className="p-[30px] mb-[20px] border-b-2 border-[#ccc7] w-[500px]">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  className="placeholder:text-xl placeholder:text-[#ccc7] w-full h-full border-none focus:outline-none text-[#eee] py-3 text-lg"
                  rows={1}
                />
              </div>
            </div>

            {/* Send Button */}
            <div className="pl-[100px]">
              <button
                type="submit"
                className="w-[150px] h-[150px] rounded-full bg-[#5d5fe1] text-[#eee] cursor-pointer hover:opacity-90 transition active:text-black active:bg-[#fff]"
              >
                Send It!
              </button>
              {statusMessage && (
                <p className="text-[#5d5fe1] mt-6 text-lg w-[200px] ">{statusMessage}</p>
              )}
            </div>
          </form>


       <div className='py-[30px]'>
       <div className='flex gap-4 items-center'>
        <div className='text-[#ccc7] text-4xl flex w-max mb-[40px] gap-5 px-5'>
          <div className='cursor-pointer'><FaGithub /></div>
          <div className='cursor-pointer'><CiLinkedin /></div>
          <div className='cursor-pointer'><SiGmail /></div>
        </div>
        <div className='text-[#ccc7] border-2 border-[#ccc7] rounded-lg py-2 px-5 w-max mb-[40px] cursor-pointer'>+447557084273</div>
        </div>
        <div className='text-[#5d5fe1]'>Design Inspiration @Dennis_Snellenberg</div>
        
       </div>
      </div>
       </motion.div>
    </motion.section>
    </div>
}

export default ContactPage







