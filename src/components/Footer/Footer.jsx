/* eslint-disable no-unused-vars */
import React from 'react'
import Image from 'next/image'

import twitter from '../../../public/assets/twitter.png'
import instagram from '../../../public/assets/instagram.png'
import yt1 from '../../../public/assets/yt1.png'
import fb from '../../../public/assets/fb.png'

const Footer = () => {
  return (
    <div className="footer mx-auto my-6 p-4 flex flex-col lg:flex-row lg:items-center border-t border-[#3a9b43] bg-[#49654E] text-white rounded-lg shadow-lg w-[95%]">
      <div className="lg:w-1/2">
        <p className="mb-4 text-center lg:text-left text-sm lg:text-base">© AYUSH AARAMBH. All rights reserved.</p>
        <ul className="flex justify-center lg:justify-start mb-4 space-x-8">
          <li className="list-none">
            <a href="#" className="hover:underline">Terms of Service</a>
          </li>
          <li className="list-none">
            <a href="#" className="hover:underline">Privacy Policy</a>
          </li>
        </ul>
      </div>

      <section id="contact-us" className="lg:w-1/2 mt-4 lg:mt-0 text-center lg:text-right flex flex-col items-center lg:items-end text-black">
        <div className="contact flex flex-col items-center lg:items-end text-black">
          <h3 className="mb-4 text-2xl lg:text-4xl font-semibold">Stay Connected</h3>
          <p className="mb-4 text-sm lg:text-base">Follow us on social media to stay updated with the latest from AYUSH.</p>
          <div className="social-links flex flex-col lg:flex-row items-center lg:items-end gap-4 lg:gap-8">
            <a href="https://x.com/moayush" target="_blank" className="flex items-center text-white no-underline transition-colors duration-300 hover:text-yellow-400">
              <Image src={twitter} alt="Twitter" className="w-6 h-6 mr-2 object-cover" />
              Twitter
            </a>

            <a href="https://www.instagram.com/ministryofayush/" target="_blank" className="flex items-center text-white no-underline transition-colors duration-300 hover:text-yellow-400">
              <Image src={instagram} alt="Instagram" className="w-6 h-6 mr-2 object-cover" />
              Instagram
            </a>

            <a href="https://www.youtube.com/@MinistryofAYUSHofficial" target="_blank" className="flex items-center text-white no-underline transition-colors duration-300 hover:text-yellow-400">
              <Image src={yt1} alt="YouTube" className="w-6 h-6 mr-2 object-cover" />
              YouTube
            </a>

            <a href="https://www.facebook.com/moayush/" target="_blank" className="flex items-center text-white no-underline transition-colors duration-300 hover:text-yellow-400">
              <Image src={fb} alt="Facebook" className="w-6 h-6 mr-2 object-cover" />
              Facebook
            </a>
          </div>
        </div>
      </section>
    </div>

  );
}

export default Footer;
