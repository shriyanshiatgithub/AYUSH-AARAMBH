"use client"

import React, { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import Programs from '@/components/Programs/Programs'
import Title from '@/components/Title/Title'
import About from '@/components/About/About'
import Sectors from '@/components/Sectors/Sectors'
import FAQs from '@/components/FAQs/faq'
import Contact from '@/components/Contact/Contacts'
import Footer from '@/components/Footer/Footer'
import Videoplayer from '@/components/Videoplayer/Videoplayer'

const Home: React.FC = () => {
  const [playState, setPlayState] = useState<boolean>(false);

  useEffect(() => {
    // Dynamically load the Voiceflow chat widget
    const script = document.createElement('script');
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    script.type = "text/javascript";
    script.onload = function () {
      if (window.voiceflow && window.voiceflow.chat) {
        window.voiceflow.chat.load({
          verify: { projectID: '66d2013071827d420132bce3' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production'
        });
      }
    };
    document.body.appendChild(script);

    // Cleanup: remove the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);



  return (
    <div>
      <Navbar />
      <Hero />
      <div>
        <About setPlayState={setPlayState} />
        <Title subtitle="AYUSH SECTORS" Title="DESCRIPTION" />
        <Sectors />
        <Title subtitle="OUR PROGRAM" Title="WHAT WE OFFER" />
        <Programs />
        <Title subtitle="FAQs" Title="FIND YOUR ANSWERS" />
        <FAQs />
        <Title subtitle="CONTACT US" Title="GET IN TOUCH" />
        <Contact />
        <Footer />
      </div>
      <Videoplayer playState={playState} setPlayState={setPlayState} />
      
    </div>
  );
}

export default Home;
