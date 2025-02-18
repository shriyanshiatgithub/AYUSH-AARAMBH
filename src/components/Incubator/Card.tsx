"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';

interface CardProps {
  imageSrc: any;
  title: string;
  location: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, location, description }) => {
  useEffect(() => {
    const cardElements = document.querySelectorAll('.card');
    cardElements.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.classList.add('shadow-2xl');
      });
      card.addEventListener('mouseleave', () => {
        card.classList.remove('shadow-2xl');
      });
    });
  }, []);

  return (
    <div className="card bg-[#8aa989] rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
      <Image src={imageSrc} alt={`${title} Logo`} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-white text-lg font-bold mb-2">{title}</h2>
        <p className="text-green-100 text-sm mb-1">{location}</p>
        <p className="text-green-50 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default Card;
