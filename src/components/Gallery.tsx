import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Gallery = () => {
  return (
    <div className="w-full p-6 flex flex-col items-center bg-gray-50 min-h-screen">
      {/* Heading */}
      <h1 className="text-black font-extrabold text-4xl md:text-5xl leading-tight text-center mb-5 mt-6">
        GALLERY
      </h1>

      <div className="w-full max-w-6xl">
        {/* Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ 
            clickable: true,
            bulletClass: "swiper-pagination-bullet !bg-gray-400 !opacity-100",
            bulletActiveClass: "swiper-pagination-bullet-active !bg-blue-600"
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="relative"
        >
          <SwiperSlide className="flex flex-col items-center pb-12">
            <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <img
                src="https://picsum.photos/id/1015/600/400"
                alt="Gallery Image 1"
                className="w-full h-64 object-cover"
              />
            </div>
            <p className="text-black text-xl font-bold text-center p-4 bg-white rounded-b-lg shadow-md w-full">
              Vandes ti
            </p>
          </SwiperSlide>

          <SwiperSlide className="flex flex-col items-center pb-12">
            <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <img
                src="https://picsum.photos/id/1016/600/400"
                alt="Gallery Image 2"
                className="w-full h-64 object-cover"
              />
            </div>
            <p className="text-black text-xl font-bold text-center p-4 bg-white rounded-b-lg shadow-md w-full">
              Eits od
            </p>
          </SwiperSlide>

          <SwiperSlide className="flex flex-col items-center pb-12">
            <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <img
                src="https://picsum.photos/id/1025/600/400"
                alt="Gallery Image 3"
                className="w-full h-64 object-cover"
              />
            </div>
            <p className="text-black text-xl font-bold text-center p-4 bg-white rounded-b-lg shadow-md w-full">
              Ipsum
            </p>
          </SwiperSlide>

          <SwiperSlide className="flex flex-col items-center pb-12">
            <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <img
                src="https://picsum.photos/id/1035/600/400"
                alt="Gallery Image 4"
                className="w-full h-64 object-cover"
              />
            </div>
            <p className="text-black text-xl font-bold text-center p-4 bg-white rounded-b-lg shadow-md w-full">
              Lorem
            </p>
          </SwiperSlide>
          
          {/* Custom navigation buttons */}
          <div className="swiper-button-prev !text-blue-600 after:!text-2xl"></div>
          <div className="swiper-button-next !text-blue-600 after:!text-2xl"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;