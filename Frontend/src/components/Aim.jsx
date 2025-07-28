// import React from "react";
// import { Target, Eye } from "lucide-react";
// import V1 from "../assets/vision1.png"
// import M2 from "../assets/mission2.png"

// const Aim = () => {
//   return (
//     // Left side

//     <div className="flex justify-center m-auto max-w-[1100px]  items-center  px-8 py-10 border border-slate-300 bg-white rounded-2xl mt-4 bg-gradient-to-b from-sky-100 shadow-md">
//       <div className=" ">
//         <div className="">
//           <div className="">
//             <div className="grid md:grid-cols-2 gap-40">
//               <div className="flex items-start space-x-5">
//                 <div className="bg-purple-100 p-3 rounded-lg">
//                   <Target className="w-6 h-6 text-purple-600" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-950 mb-3">
//                     Our Mission: Helping Your Business Succeed Online
//                   </h3>
//                   <p className="text-gray-700 text-sm font-normal">
//                     While working with us we make sure your business has
//                     everything it needs to succeed online. We take the time to
//                     understand your needs then deliver solutions that fit your
//                     goals, all backed by reliable, expert support.
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <div className="bg-blue-100 p-3 rounded-lg">
//                   <Eye className="w-6 h-6 text-blue-600" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-3">
//                     Our Vision
//                   </h3>
//                   <p className="text-gray-700 text-sm font-normal">
//                     is to ensure uninterrupted, authentic and secure digital
//                     operations for businesses worldwide. We endeavor to set new
//                     standards in service excellence through innovative
//                     technology and steady support. Empowering success and
//                     building trust is at the heart of everything we do.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* the right image  */}
//         {/*
//          <div className="w-full lg:justify-start justify-center items-start flex">
//                     <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
//                       <img
//                         className="sm:mt-5 sm:ml- w-full h-full rounded-3xl object-cover"
//                         src={WhyImage}
//                         alt="about Us"
//                       />
//                     </div>
//                   </div> */}
//       </div>
//     </div>
//   );
// };

// export default Aim;

import React from "react";
import V1 from "../assets/vision1.png";
import M2 from "../assets/mission2.png";

const Aim = () => {
  return (
    <section className=" m-auto max-w-[1400px] flex justify-center items-center py-0 px-6 relative xl:mr-0 lg:mr-5 mr-0 border border-slate-300 bg-white rounded-2xl mt-5 bg-gradient-to-b from-sky-100 shadow-md ">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">

          {/* Right Image */}
          <div className="w-full lg:justify-start justify-center items-start flex">
            <div className="sm:w-[500px] w-full sm:h-[280px] h-full  relative">
              <img
                className="sm:mt-5 sm:ml- w-full h-full rounded-3xl object-cover"
                src={V1}
                alt="about Us"
              />
            </div>
          </div>

          {/* Left Content */}
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex mt-3">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                <div>
                  <h3 className="underline text-xl font-bold text-gray-900 ">
                    Our Vision
                  </h3>

                  <p className="text-gray-700 text-base font-normal mt-[14px]">
                    is to ensure uninterrupted, authentic and secure digital
                    operations for businesses worldwide. We endeavor to set new
                    standards in service excellence through innovative
                    technology and steady support. Empowering success and
                    building trust is at the heart of everything we do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
          {/* Left Content */}
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                <div>
                  <h3 className="underline text-xl font-bold text-gray-900 mb-3">
                    Our Mission
                  </h3>

                  <p className="text-gray-700 text-base font-normal">
                    While working with us we make sure your business has
                    everything it needs to succeed online. We take the time to
                    understand your needs then deliver solutions that fit your
                    goals, all backed by reliable, expert support.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:justify-start justify-center items-start flex">
            <div className="sm:w-[500px] w-full sm:h-[380px] h-full  relative">
              <img
                className="sm:mt-5 sm:ml- w-full h-full rounded-3xl object-cover"
                src={M2}
                alt="about Us"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aim;