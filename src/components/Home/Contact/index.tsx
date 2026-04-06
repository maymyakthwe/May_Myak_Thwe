import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import hero from '../../../assets/hero.png';
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";

type Props = {
  contactRef: React.RefObject<HTMLDivElement | null>;
};

const Contact = ({ contactRef }: Props) => {
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

  const { scrollYProgress } = useScroll({
    target: contactRef,
    offset: ['start end', 'end start'],
  });

  const contactY = useTransform(scrollYProgress, [0.5, 1], [-500, 0]);

  return (
    <motion.section
      id="contact-section"
      className=" w-[70%] sm:w-[60%] lg:w-[70%]  xl:w-[60%] h-max bg-[#222] mx-auto overflow-hidden  min-h-[100vh]"
      style={{ y: -100 }}
    >
      <motion.div
      initial={{y:-500}}
        style={{ y: contactY }}
        className="mt-[150px]"
      >
        <div>
          {/* Header */}
          <div className="flex items-center xs:gap-[30px] gap-[20px] xl:pb-[100px] lg:pb-[80px] pb-[50px]">
            <div
              className="sm:w-[150px] sm:h-[150px]  xs:w-[120px] xs:h-[120px] w-[85px] h-[85px] rounded-full shrink-0"
              style={{
                backgroundImage: `url(${hero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <h1 className="w-[800px] text-[#eee] lg:text-7xl sm:text-5xl xs:text-4xl xxs:text-3xl text-2xl font-medium">
              Let&#8217;s cook up something <span className="text-[#5d5fe1]">amazing.</span>
            </h1>
          </div>

          {/* Form */}
          <form ref={formRef} onSubmit={sendEmail} className="flex lg:items-center lg:flex-row flex-col items-start ">
            <div>
              <div className="xl:p-[30px] lg:p-[20px] sm:p-[20px] p-[10px] mb-[10px] xs:mb-[20px] border-b-2 border-[#ccc7] xl:w-[500px] lg:w-[450px] sm:w-[480px] xs:w-[350px] xxs:w-[280px] w-[250px] xs:text-xl text-[14px]">
                <input
                  name="from_name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className="xs:placeholder:text-xl placeholder:text-[14px] placeholder:text-[#ccc7] w-full h-full border-none focus:outline-none text-[#eee] py-3 text-lg "
                />
              </div>

              <div className="xl:p-[30px] lg:p-[20px] sm:p-[20px] p-[10px] mb-[10px] xs:mb-[20px] border-b-2 border-[#ccc7] xl:w-[500px] lg:w-[450px] sm:w-[480px] xs:w-[350px] xxs:w-[280px] w-[250px] xs:text-xl text-[14px]">
                <input
                  name="from_email"
                  type="email"
                  placeholder="Your Email"
                  required
                  className="xs:placeholder:text-xl placeholder:text-[14px] placeholder:text-[#ccc7] w-full h-full border-none focus:outline-none text-[#eee] py-3 text-lg "
                />
              </div>

              <div className="xl:p-[30px] lg:p-[20px] sm:p-[20px] p-[10px] mb-[10px] xs:mb-[20px] border-b-2 border-[#ccc7] xl:w-[500px] lg:w-[450px] sm:w-[480px] xs:w-[350px] xxs:w-[280px] w-[250px] xs:text-xl text-[14px]">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  className="xs:placeholder:text-xl placeholder:text-[14px] placeholder:text-[#ccc7] w-full h-full border-none focus:outline-none text-[#eee] py-3 text-lg "
                  rows={1}
                />
              </div>
            </div>

            {/* Send Button */}
            <div className="lg:pl-[100px] pl-0 lg:py-0 py-[25px]">
              <button
                type="submit"
                className="lg:w-[150px] lg:h-[150px] lg:rounded-full bg-[#5d5fe1] text-[#eee] cursor-pointer hover:opacity-90 transition active:text-black active:bg-[#fff] sm:w-[480px] sm:h-[60px] xs:w-[350px] xxs:w-[280px] w-[250px] xs:text-xl text-[14px] h-[40px] sm:rounded-2xl rounded-lg"
              >
                Send It!
              </button>
              {statusMessage && (
                <p className="text-[#5d5fe1] mt-6 text-lg w-[200px]">{statusMessage}</p>
              )}
            </div>
          </form>

          {/* Contact Info */}
          <div className=" lg:pt-[50px] xxs:pt-[20px] pt-0">
            <div className="flex gap-4 xxs:items-center xxs:flex-row flex-col items-start">
              <div className="text-[#ccc7] border-2 border-[#ccc7] rounded-lg py-2 px-5 w-max xxs:mb-[40px] mb-[10px] cursor-pointer block xxs:hidden">
                +447557084273
              </div>
              <div className="text-[#ccc7] text-2xl sm:text-4xl flex w-max xxs:mb-[40px] mb-[10px] gap-5 lg:px-5">
                <div className="cursor-pointer"><FaGithub /></div>
                <div className="cursor-pointer"><CiLinkedin /></div>
                <div className="cursor-pointer"><SiGmail /></div>
              </div>
              <div className="text-[#ccc7] border-2 border-[#ccc7] rounded-lg py-2 px-5 w-max xxs:mb-[40px] mb-[10px] cursor-pointer xxs:block hidden">
                +447557084273
              </div>
            </div>
            <div className="text-[#5d5fe1] xxs:text-xl text-[12px]">
              Design Inspiration @Dennis_Snellenberg
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
