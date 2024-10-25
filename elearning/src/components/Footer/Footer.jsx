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

            </div>

        </div>

    </div>
  )
}
export default Footer;
