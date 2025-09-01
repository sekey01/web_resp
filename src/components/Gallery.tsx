"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, } from "react";

const Gallery = () => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 20 },
    breakpoints: {
      "(min-width: 640px)": { slides: { perView: 1, spacing: 20 } },
      "(min-width: 768px)": { slides: { perView: 2, spacing: 20 } },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 30 } },
    },
  });

  // autoplay
  useEffect(() => {
    if (!slider) return;
    let timer: ReturnType<typeof setTimeout>;
    const autoplay = () => {
      timer = setTimeout(() => {
        slider.current?.next();
        autoplay();
      }, 3000);
    };
    autoplay();
    return () => clearTimeout(timer);
  }, [slider]);

  return (
    <div className="w-full p-6 flex flex-col items-center bg-gray-50 min-h-screen">
      {/* Heading */}
      <h1 className="text-black font-extrabold text-4xl md:text-5xl leading-tight text-center mb-5 mt-6">
        GALLERY
      </h1>

      <div className="w-full max-w-6xl relative">
        <div ref={sliderRef} className="keen-slider">
          {/* Slides */}
          {[
            {
              src: "https://picsum.photos/id/1015/600/400",
              title: "Vandes ti",
            },
            {
              src: "https://picsum.photos/id/1016/600/400",
              title: "Eits od",
            },
            {
              src: "https://picsum.photos/id/1025/600/400",
              title: "Ipsum",
            },
            {
              src: "https://picsum.photos/id/1035/600/400",
              title: "Lorem",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="keen-slider__slide flex flex-col items-center pb-12"
            >
              <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                <img
                  src={item.src}
                  alt={`Gallery Image ${i + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
              <p className="text-black text-xl font-bold text-center p-4 bg-white rounded-b-lg shadow-md w-full">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between items-center w-full absolute top-1/2 transform -translate-y-1/2 px-4">
          <button
            onClick={() => slider.current?.prev()}
            className="bg-white shadow-md p-3 rounded-full text-blue-600 hover:bg-blue-50"
          >
            ◀
          </button>
          <button
            onClick={() => slider.current?.next()}
            className="bg-white shadow-md p-3 rounded-full text-blue-600 hover:bg-blue-50"
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
