"use client"

import React from 'react';
import { PiPasswordFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { signIn, signInWithCredentials } from '@/lib/LoginHelper';

const AyushSignup = () => {

  return (
    <section id="signup-signin" className="flex flex-col md:flex-row md:justify-between items-center py-10 px-5 bg-[#d0eacb] h-screen text-[#333]">
      <div className="bg-[#f0f9e9] p-5 rounded-lg w-full md:w-1/2 mb-5 md:mb-0 flex flex-col items-center justify-center min-h-[500px]">
        <h2 className="text-green-600 mb-5 text-center text-2xl">Join AYUSH-AARAMBH</h2>
        <p className="mb-5 text-center text-lg">Sign up or sign in to explore more opportunities with the AYUSH Startup community.</p>
        <form className="w-full flex flex-col items-center" action={async (formData) => {
          await signInWithCredentials(formData)
        }}>
          <div className="mb-4 w-full">
            <label className="input input-bordered flex items-center gap-2 bg-white w-full">
              <MdEmail size={35} />
              <input type="email" className="grow" placeholder="Email" name="email" required />
            </label>
          </div>
          <div className="mb-4 w-full">
            <label className="input input-bordered flex items-center gap-2 bg-white w-full">
              <PiPasswordFill size={35} />
              <input type="password" className="grow" placeholder="Password" name='password' required minLength={8} />
            </label>
          </div>
          <div className="text-center mt-5 flex justify-center w-full">
            <button type="submit" className="bg-green-600 text-white py-2 px-5 rounded-md mx-2 transition-transform duration-300 hover:bg-green-500 hover:shadow-md">Sign Up</button>
            <button type="button" className="bg-green-600 text-white py-2 px-5 rounded-md mx-2 transition-transform duration-300 hover:bg-green-500 hover:shadow-md">Sign In</button>
          </div>
        </form>
        <form action={signIn}>
          <div className="flex justify-center mt-5 w-full">
            <button type="submit" className="bg-green-600 text-white py-2 px-5 rounded-md mx-2 transition-transform duration-300 hover:bg-green-500 hover:shadow-md flex items-center gap-2">
              <FcGoogle size={25} /> Continue with Google
            </button>
          </div>
        </form>
      </div>

      <div className="bg-[#f0f9e9] p-5 rounded-lg ml-0 md:ml-5 w-full md:w-[40%] flex flex-col items-center justify-center min-h-[500px] text-center">
        <h3 className="text-green-600 mb-4 text-4xl">Did You Know?</h3>
        <p className="mb-2 text-xl text-[#555]">AYUSH startups have seen a growth rate of over 15% annually due to increasing global demand for alternative medicine.</p>
        <p className="mb-2 text-xl text-[#555]">India is the largest producer of medicinal plants and holds a 6,000-year-old tradition of Ayurvedic practices.</p>
      </div>
    </section>
  );
};

export default AyushSignup;