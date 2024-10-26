import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'; // React Icons kütüphanesi
import { HiLocationMarker } from 'react-icons/hi';
import { FaDesktop } from 'react-icons/fa';
import FooterImg from "../../assets/footer.jpg"
const FooterBg={
    backgroundImage:`url(${FooterImg})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundPosition:"bottomcenter",
};
export const Footer = () => {
  return (
    <div style={FooterBg} className='rounded-t-3xl'>
        <div className='container'>
            <div className='grid md:grid-cols-4 md:gap-4 py-5 border-t-2 border-gray-300/10 text-black'>
            <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                <FaDesktop className='text-secondary text-4xl'/>
                <p className=''>E-tutor</p>

            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit impedit, harum unde, repudiandae quae nam quis nemo aliquam iure consequuntur dolor quam ipsa id doloremque ad, molestiae ex earum? Iste.
            </p>
            <div>
              <a href="#" className='hover:text-secondary duration-200'>
                <HiLocationMarker className="text-3xl"/>

              </a>
              <a href="#" className='hover:text-secondary duration-200'>
                <FaInstagram className='text-3xl'/>

              </a>
              <a href="#" className='hover:text-secondary duration-200'>
                <FaFacebook className='text-3xl'/>

              </a>
              <a href="#" className='hover:text-secondary duration-200'>
                <FaLinkedin className='text-3xl'/>

              </a>
            </div>

            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 md:col-span-3 md:ml-14'>
              <div className='py-8 px-4' >
                <h1 className='sm:text-xl yexy-xl font-bold sm:text-left text-justify mb-5'>
                  Important Links

                </h1>
                <ul className='flex flex-col gap-3'>
                  <li>
                    <a href="#" className='hover:text-secondary duration-200'>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className='hover:text-secondary duration-200'>
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className='hover:text-secondary duration-200'>
                     Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className='hover:text-secondary duration-200'>
                     Login
                    </a>
                  </li>

                </ul>

              </div>
              <div className='py-8 px-4'>
                <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-5'>
                  Resources

                </h1>
                <ul className='flex flex-col gap-3'>
                  <li>
                    <a href="#" className='hover:text-secondary duration-200'>
                      Home

                    </a>
                  </li>
                  <li>
                    <a href="#" className='hover:text-secondary duration-200'>
                     About

                    </a>
                  </li>
                  <li>
                    <a href="#" className='hover:text-secondary duration-200'>
                   Services

                    </a>
                  </li>
                  <li>
                    <a href="#" className='hover:text-secondary duration-200'>
                  Login

                    </a>
                  </li>

                </ul>

              </div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">
                  Company Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="#" className="hover:text-secondary duration-200">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-secondary duration-200">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-secondary duration-200">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-secondary duration-200">
                      Login
                    </a>
                  </li>
                </ul>
              </div>

            </div>


        </div>
        <div className='mt-8'>
          <div className='text-center py-6 border-t-2 border-gray-800/10'>
          <span className='text-sm text-black/60'>
          {""}
            @copyright 2024 The Coding Journey
          </span>

          </div>

        </div>

    </div>
  )
}
export default Footer;
