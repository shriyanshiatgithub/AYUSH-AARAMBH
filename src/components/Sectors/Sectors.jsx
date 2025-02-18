import React from 'react';
import Image from 'next/image';

import Logo1 from '../../../public/assets/ayurveda.png';
import Logo2 from '../../../public/assets/yoga1.png';
import Logo3 from '../../../public/assets/unani1.png';
import Logo4 from '../../../public/assets/siddha1.png';
import Logo5 from '../../../public/assets/sowa1.png';
import Logo6 from '../../../public/assets/homeopathy1.png';

const Sectors = () => {
  return (
    <div className='flex flex-col items-center p-4' id='sectors'>
      <div className="grid grid-cols-3 gap-6 w-full">
        {/* Top Row */}
        <div className="mb-6 text-center transition-transform ease-linear hover:transform hover:scale-105">
          <a href="https://ayush.gov.in/" target="_blank" rel="noopener noreferrer">
            <Image src={Logo1} alt="Ayurveda" className='w-2/4 mx-auto rounded-[10px] aspect-square object-cover transition-transform duration-300 ease-linear hover:brightness-75' />
          </a>
          <div className="w-4/5 mt-4 text-base text-black text-justify mx-auto transition-colors duration-300 ease-linear hover:text-[#3a9b43]">
            <p>{"Ayurveda is the time tested traditional system of medicine of India. The term 'Ayurveda' meaning 'the knowledge of life comprises of two Sanskrit words viz 'Ayu' meaning 'Life' and 'Veda' meaning 'Knowledge' or 'Science'."}</p>
          </div>
        </div>
        <div className="mb-6 text-center transition-transform ease-linear hover:transform hover:scale-105">
          <a href="https://ayush.gov.in/" target="_blank" rel="noopener noreferrer">
            <Image src={Logo2} alt="Yoga" className='w-2/4 mx-auto rounded-[10px] aspect-square object-cover transition-transform duration-300 ease-linear hover:brightness-75' />
          </a>
          <div className="w-4/5 mt-4 text-base text-black text-justify mx-auto transition-colors duration-300 ease-linear hover:text-[#3a9b43]">
            <p>{"The word 'Yoga' comes from the Sanskrit word 'yuj' which means 'to unite or integrate'. Yoga is about the union of a person's own consciousness and the universal consciousness. Naturopathy is a cost-effective drugless, non-invasive therapy involving the use of natural materials for health care and healthy living."}</p>
          </div>
        </div>
        <div className="mb-6 text-center transition-transform ease-linear hover:transform hover:scale-105">
          <a href="https://ayush.gov.in/" target="_blank" rel="noopener noreferrer">
            <Image src={Logo3} alt="Unani" className='w-2/4 mx-auto rounded-[10px] aspect-square object-cover transition-transform duration-300 ease-linear hover:brightness-75' />
          </a>
          <div className="w-4/5 mt-4 text-base text-black text-justify mx-auto transition-colors duration-300 ease-linear hover:text-[#3a9b43]">
            <p>Unani System of medicine is a comprehensive medical system, which provides preventive, promotive, curative, and rehabilitative health care. The system is holistic in nature and takes into account the whole personality of an individual rather than taking a reductionist approach towards disease.</p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mb-6 text-center transition-transform ease-linear hover:transform hover:scale-105">
          <a href="https://ayush.gov.in/" target="_blank" rel="noopener noreferrer">
            <Image src={Logo4} alt="Siddha" className='w-2/4 mx-auto rounded-[10px] aspect-square object-cover transition-transform duration-300 ease-linear hover:brightness-75' />
          </a>
          <div className="w-4/5 mt-4 text-base text-black text-justify mx-auto transition-colors duration-300 ease-linear hover:text-[#3a9b43]">
            <p>{"The Siddha system is an ancient system of medicine in India. The word 'Siddha' is derived from the root word \"Citti\" meaning attainment of perfection, eternal bliss, and accomplishment."}</p>
          </div>
        </div>
        <div className="mb-6 text-center transition-transform ease-linear hover:transform hover:scale-105">
          <a href="https://ayush.gov.in/" target="_blank" rel="noopener noreferrer">
            <Image src={Logo5} alt="Sowa-Rigpa" className='w-2/4 mx-auto rounded-[10px] aspect-square object-cover transition-transform duration-300 ease-linear hover:brightness-75' />
          </a>
          <div className="w-4/5 mt-4 text-base text-black text-justify mx-auto transition-colors duration-300 ease-linear hover:text-[#3a9b43]">
            <p>{"Sowa-Rigpa is the traditional medicine of many parts of the Himalayan region used mainly by the Tribal and Bhot people. Sowa-Rigpa(Bodh-Kyi) means 'science of healing' and the practitioners of this medicine are known as Amchi."}</p>
          </div>
        </div>
        <div className="mb-6 text-center transition-transform ease-linear hover:transform hover:scale-105">
          <a href="https://ayush.gov.in/" target="_blank" rel="noopener noreferrer">
            <Image src={Logo6} alt="Homoeopathy" className='w-2/4 mx-auto rounded-[10px] aspect-square object-cover transition-transform duration-300 ease-linear hover:brightness-75' />
          </a>
          <div className="w-4/5 mt-4 text-base text-black text-justify mx-auto transition-colors duration-300 ease-linear hover:text-[#3a9b43]">
            <p>{"'Homoeopathy' was introduced as a scientific system of drug therapeutics by a German Physician, Dr. Christian Frederick Samuel Hahnemann in 1805. The principle of Homoeopathy is Similia Similibus Curentur i.e. let likes be treated by likes."}</p>
          </div>
        </div>
      </div>
      <button className='mt-6 px-6 py-2 bg-[#101720] text-white rounded hover:bg-[#3a9b43]'>See More Here</button>
    </div>
  );
}

export default Sectors;
