import { IoSettingsOutline } from "react-icons/io5";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from '../../../public/assets/logo.jpeg';
import './Navbar.css';
import GoogleTranslate from '@/components/language/lang'; // Ensure correct path

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [translateVisible, setTranslateVisible] = useState(false); // Track the visibility of the Google Translate element

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const toggleTranslate = () => {
    setTranslateVisible(!translateVisible); // Toggle the visibility of the Google Translate widget
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''} navbar`}>
      <Image src={Logo} alt="Logo" className='logo navbar-start' />
      <ul className="navbar-end">
        <li><a className="btns" href='#hero'>Home</a></li>
        <li><a className="btns" href='#about'>About us</a></li>
        <li><a className="btns" href='#contact'>Contact Us</a></li>
        <li>
          <div className="dropdown dropdown-bottom dropdown-end justify-center items-center flex">
            <div tabIndex={0} role="button" className="m-1">
              <IoSettingsOutline color="#253528" size={30} />
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-[#49654e] rounded-box z-[1] w-52 p-2 mt-5 shadow">
              <li>
                <a role="button" onClick={toggleTranslate}>Language</a>
              </li>
              {translateVisible && (
                <li>
                  <GoogleTranslate /> {/* Google Translate widget */}
                </li>
              )}
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
