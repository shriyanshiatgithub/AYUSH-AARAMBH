import React from 'react';
import NavBar from './Navbar';
import Card from './Card';

import img1 from '../../../public/images/images (2).png';
import img2 from "../../../public/images/images (4) copy.png";
import img3 from "../../../public/images/download.png";
import img4 from "../../../public/images/images (3).png";
import img5 from "../../../public/images/images (4).png";
import img6 from "../../../public/images/images (5).png";
import img7 from "../../../public/images/images (6).png";
import img8 from "../../../public/images/images (7).png";
import img9 from "../../../public/images/images (8).png";
import img10 from "../../../public/images/images (9).png";
import img11 from "../../../public/images/custom-building-logo-modern-real-estate-company-logo-construction-working-industry-logo-template-free-vector.jpg";
import img12 from "../../../public/images/download.jpg";

const IncubatorsPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />
      <main className="container mx-auto p-6">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Card
            imageSrc={img1}
            title="Gyan Ganga Genesis Incubation Center"
            location="Jabalpur, Madhya Pradesh"
            description="Design, Internet of Things, IT Services, Marketing"
          />
          <Card
            imageSrc={img2}
            title="Vsure Investment Affairs"
            location="Jabalpur, Madhya Pradesh"
            description="Design, Internet of Things, IT Services, Marketing"
          />
          <Card
            imageSrc={img3}
            title="Wadhwani Foundation"
            location="Jabalpur, Madhya Pradesh"
            description="Design, Internet of Things, IT Services, Marketing"
          />
          <Card
            imageSrc={img4}
            title="KLIC Incubators"
            location="Jabalpur, Madhya Pradesh"
            description="Design, Internet of Things, IT Services, Marketing"
          />
          <Card
            imageSrc={img5}
            title="IIT Mandi Incubator"
            location="Jabalpur, Madhya Pradesh"
            description="Design, Internet of Things, IT Services, Marketing"
          />
          <Card
            imageSrc={img6}
            title="SGSITS Incubbator"
            location="Jabalpur, Madhya Pradesh"
            description="Design, Internet of Things, IT Services, Marketing"
          />
          <Card
            imageSrc={img7}
            title="Grow More Ventures"
            location="Jabalpur, Madhya Pradesh"
            description="Design, Internet of Things, IT Services, Marketing"
          />
          <Card
            imageSrc={img8}
            title="Estile Ventures"
            location="Jabalpur, Madhya Pradesh"
            description="Design, Internet of Things, IT Services, Marketing"
          />
          <Card
            imageSrc={img9}
            title="SAFEGUARD360"
            location="Jabalpur, Madhya Pradesh"
            description="Design, Internet of Things, IT Services, Marketing"
          />
          <Card
            imageSrc={img10}
            title="AARAMBH Ventures"
            location="Jabalpur, Madhya Pradesh"
            description="Design, Internet of Things, IT Services, Marketing"
          />
          <Card
            imageSrc={img11}
            title="Gurukul Capitals"
            location="Jabalpur, Madhya Pradesh"
            description="Design, Internet of Things, IT Services, Marketing"
          />
          <Card
            imageSrc={img12}
            title="IIMA Incubator"
            location="Jabalpur, Madhya Pradesh"
            description="Design, Internet of Things, IT Services, Marketing"
          />
        </section>
      </main>
    </div>
  );
}

export default IncubatorsPage;
