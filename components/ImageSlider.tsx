"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

type ImageItem = {
  src: string;
  alt: string;
};

type ImageSliderProps = {
  images: ImageItem[];
};
const ImageSlider = ({ images }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div id="home" className="py-14 ">
      <div className="relative w-full h-140  overflow-hidden ">
        <div className="relative w-full h-full">
          {images.map((image: { src: string; alt: string }, index: number) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover brightness-50"
                priority={index === currentIndex}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 left-0 top-0 w-full">
          <Image
            src={"/assets/upper-add.png"}
            alt={"add-on"}
            width={1250}
            height={20}
          ></Image>
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="text-white  max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 scale-y-120">
              AZORA COMMUNITY{" "}
            </h2>
            <p className="text-lg md:text-xl font-light tracking-tight ">
              MEDIA COMMUNITY FROM BALI
            </p>
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-20 top-1/2 -translate-y-1/2 bg-black/20 text-white p-2 rounded-full hover:bg-black/75 transition"
          aria-label="Previous image"
        >
          <IoIosArrowRoundBack size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-20 top-1/2 -translate-y-1/2 bg-black/20 text-white p-2 rounded-full hover:bg-black/75 transition"
          aria-label="Next image"
        >
          <IoIosArrowRoundForward size={24} />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_: any, index: number) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
