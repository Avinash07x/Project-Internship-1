import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// import ClintImg from "../assets/clint2.png"
import ClintImg2 from "../assets/cr001.png";

const testimonials = [
  {
    rating: "4.9",
    text: "Pagedone has made it possible for me to stay on top of my portfolio and make informed decisions quickly and easily.",
    img: "https://pagedone.io/asset/uploads/1696229969.png",
    name: "Jane D",
    role: "CEO",
  },
  {
    rating: "4.9",
    text: "Thanks to pagedone, I feel more informed and confident about my investment decisions than ever before.",
    img: "https://pagedone.io/asset/uploads/1696229994.png",
    name: "Harsh P.",
    role: "Product Designer",
  },
  {
    rating: "4.9",
    text: "The customer service team at pagedone went above and beyond to help me resolve a billing issue.",
    img: "https://pagedone.io/asset/uploads/1696230027.png",
    name: "Alex K.",
    role: "Design Lead",
  },
  {
    rating: "4.9",
    text: "Pagedone has made it possible for me to stay on top of my portfolio and make informed decisions quickly and easily.",
    img: "https://pagedone.io/asset/uploads/1696229969.png",
    name: "Jane D",
    role: "CEO",
  },
  {
    rating: "4.9",
    text: "Thanks to pagedone, I feel more informed and confident about my investment decisions than ever before.",
    img: "https://pagedone.io/asset/uploads/1696229994.png",
    name: "Harsh P.",
    role: "Product Designer",
  },
];

export default function Clients() {
  return (
    <div
      className="h-[650px] bg-cover bg-center bg-no-repeat border  rounded-t-xl"
      style={{ backgroundImage: `url(${ClintImg2})` }}
    >
      <section className="py-5  -mt-0">
        <div className="mx-auto max-w-7xl px-1 sm:px-1 lg:px-2">
          <div className="mb-16 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl shadow-xl">
            <h2 className="py-3 text-2xl text-center font-bold text-[#0f3843]  drop-shadow-[0_0_10px_#eefbff]">
              What our happy user says
            </h2>
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={32}
            loop={true}
            centeredSlides={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mySwiper"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className="group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-indigo-600 hover:shadow-sm">
                  <div>
                    <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 18 17"
                        fill="currentColor"
                      >
                        <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" />
                      </svg>
                      <span className="text-base font-semibold text-indigo-600">
                        {t.rating}
                      </span>
                    </div>
                    <p className="text-base text-gray-600 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800">
                      {t.text}
                    </p>
                  </div>
                  <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                    <img
                      className="rounded-full h-10 w-10 object-cover"
                      src={t.img}
                      alt="avatar"
                    />
                    <div>
                      <h5 className="text-gray-900 font-medium transition-all duration-500 mb-1">
                        {t.name}
                      </h5>
                      <span className="text-sm leading-4 text-gray-500">
                        {t.role}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}