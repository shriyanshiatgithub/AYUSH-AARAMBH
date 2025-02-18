import React, { useRef } from 'react';
import './faq.css';
import Image from 'next/image';

import next_btn from '../../../public/assets/nexticon2.png';
import back_btn from '../../../public/assets/backicon2.png';

const FAQ = () => {
    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -75) { // Adjusted to fit 4 slides
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    return (
        <div className='faq' id='faq'>
            <Image src={next_btn} alt="Next" className='nexxt-btn' onClick={slideForward} />
            <Image src={back_btn} alt="Back" className='back-btn' onClick={slideBackward} />

            <div className='slider'>
                <ul ref={slider}>
                    <li>
                        <div className='slide min-h-[220px]'>
                            {/* <div className='userinfo'>
                                <img src={faq1} alt="FAQ 1" />
                            </div> */}
                            <h3>What documents are required for registering an AYUSH startup in India?</h3>
                            <span>Delhi, INDIA</span>
                            <div className='text'>
                                <p>Typically, you need proof of identity, address proof, business plan, and relevant licenses or certifications related to AYUSH practices.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='slide min-h-[220px]'>
                            {/* <div className='userinfo'>
                                <img src={faq2} alt="FAQ 2" />
                            </div> */}
                            <h3>How do I fill out the application form for AYUSH startup registration?
                            </h3>
                            <span>Delhi, INDIA</span>
                            <div className='text'>
                                <p>{"The application form requires you to provide detailed information about your startup, including the business name, founders' details, business objectives, and the specific AYUSH domain you operate in."}</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='slide min-h-[220px]'>
                            {/* <div className='userinfo'>
                                <img src={faq3} alt="FAQ 3" />
                            </div> */}
                            <h3>What is the process for obtaining AYUSH licenses and certifications?</h3>
                            <span>Delhi, INDIA</span>
                            <div className='text'>
                                <p>You need to apply through the respective regulatory body, providing all necessary documentation and compliance details. This process is typically part of the startup registration.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='slide min-h-[220px]'>
                            {/* <div className='userinfo'>
                                <img src={faq4} alt="FAQ 4" />
                            </div> */}
                            <h3>What fees are involved in registering an AYUSH startup?</h3>
                            <span>Delhi, INDIA</span>
                            <div className='text'>
                                <p>Registration fees vary depending on the type of business and the specific AYUSH domain. There may also be additional costs for licenses and certifications.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='slide min-h-[220px]'>
                            {/* <div className='userinfo'>
                                <img src={faq5} alt="FAQ 4" />
                            </div> */}
                            <h3>What are the common mistakes to avoid when filling out the registration form?</h3>
                            <span>Delhi, INDIA</span>
                            <div className='text'>
                                <p>Ensure that all details are accurate, all required documents are attached, and the business objectives are clearly defined to avoid delays in the registration process.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='slide min-h-[220px]'>
                            {/* <div className='userinfo'>
                                <img src={faq6} alt="FAQ 4" />
                            </div> */}
                            <h3>What is the role of digital signatures in the registration process?
                            </h3>
                            <span>Delhi, INDIA</span>
                            <div className='text'>
                                <p>Digital signatures are often required for authenticating the documents submitted online as part of the registration process.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default FAQ;
