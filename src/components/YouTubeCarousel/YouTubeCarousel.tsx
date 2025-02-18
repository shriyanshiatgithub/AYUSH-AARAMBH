"use client"

import { useRef } from 'react';

const YouTubeCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300, // Adjust the scroll amount
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="w-full mt-8 relative">
      <h2 className="text-xl font-bold border-b-2 border-blue-500 mb-4">Startup Video Stories</h2>
      <div className="relative">
        {/* Left Button */}
        <button
          className="btn btn-primary absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
          onClick={scrollLeft}
        >
          &#10094;
        </button>

        {/* Carousel Container */}
        <div
          className="flex overflow-x-auto gap-4 p-4 scroll-smooth scrollbar-hide"
          ref={carouselRef}
        >
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID_1"
            frameBorder="0"
            allowFullScreen
            className="w-[300px] h-[180px] rounded-lg"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID_2"
            frameBorder="0"
            allowFullScreen
            className="w-[300px] h-[180px] rounded-lg"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID_3"
            frameBorder="0"
            allowFullScreen
            className="w-[300px] h-[180px] rounded-lg"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID_4"
            frameBorder="0"
            allowFullScreen
            className="w-[300px] h-[180px] rounded-lg"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID_5"
            frameBorder="0"
            allowFullScreen
            className="w-[300px] h-[180px] rounded-lg"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID_6"
            frameBorder="0"
            allowFullScreen
            className="w-[300px] h-[180px] rounded-lg"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID_7"
            frameBorder="0"
            allowFullScreen
            className="w-[300px] h-[180px] rounded-lg"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID_8"
            frameBorder="0"
            allowFullScreen
            className="w-[300px] h-[180px] rounded-lg"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID_9"
            frameBorder="0"
            allowFullScreen
            className="w-[300px] h-[180px] rounded-lg"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID_10"
            frameBorder="0"
            allowFullScreen
            className="w-[300px] h-[180px] rounded-lg"
          ></iframe>
        </div>

        {/* Right Button */}
        <button
          className="btn btn-primary absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
          onClick={scrollRight}
        >
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default YouTubeCarousel;
