import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <div className="container mt-5 relative px-2">
        {/* slideshow up front */}
        <div className="absolute z-30 bottom-10 left-10">
          <p className="text-white font-semibold text-xl">
            "DARE TO LIVE THE LIFE <br /> YOU'VE ALWAYS WANTED"
          </p>
          <br />
          <button className="bg-gradient-to-r from-[#ec515e] to-[#6200ff] font-semibold p-3 px-10">
            EXPLORE NOW &#8594;
          </button>
        </div>
        <Swiper
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="w-full rounded-lg shadow-md h-96"
        >
          <SwiperSlide>
            <Image
              className="object-cover"
              src="/images/carousal1.png"
              fill
              alt="image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/carousal2.png"
              className="object-cover"
              fill
              alt="image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/carousal3.png"
              className="object-cover"
              fill
              alt="image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/carousal4.png"
              className="object-cover"
              fill
              alt="image"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
