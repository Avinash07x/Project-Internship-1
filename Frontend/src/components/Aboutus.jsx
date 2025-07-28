

import AIMG3 from "../assets/About3.jpg";

export default function AboutUs() {
  return (
    <section className="max-w-[1400px] flex justify-center items-center m-auto py-12 px-2 relative xl:mr-0 lg:mr-5 mr-0 border border-slate-300 bg-white rounded-2xl mt-16">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-start xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
          {/* Left Content */}
          <div className="w-full flex-col justify-start lg:items-start items-center gap-8 inline-flex">
            <div className="w-full flex-col justify-start items-start gap-6 flex">
              <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                <h6 className="text-slate-950 text-3xl font-bold leading-tight">
                  About DC Keepers
                </h6>
                <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h2 className="text-indigo-700 text-xl font-bold font-manrope leading-normal lg:text-start text-center">
                    The Tale of Our Achievement Story
                  </h2>
                  <p className="text-gray-600 text-base font-normal leading-relaxed lg:text-start text-center">
                    At DC Keepers, we are committed to help your business boom
                    in the digital world. If you are just starting, looking to
                    grow or need a reliable partner for your existing online
                    operations, we have the solutions that will help you to
                    succeed. We focus on providing secured & reliable services
                    to fit your unique business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:justify-end justify-center items-start flex">
            <div className="sm:w-[480px] w-full sm:h-[360px] xl:h-[400px] bg-gray-50 rounded-2xl border border-gray-300 relative overflow-hidden shadow-sm">
              <img
                className="w-full h-full rounded-2xl object-cover"
                src={AIMG3}
                alt="DC Keepers team collaboration"
              />
            </div>
          </div>
        </div>

        {/* Stats Cards - Below the main content */}
        <div className="w-full mt-12">
          <div className="w-full justify-start items-center gap-6 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
            <div className="w-full h-full p-6 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all duration-300 ease-in-out flex-col justify-start items-start gap-3 inline-flex bg-white">
              <h4 className="text-indigo-700 text-3xl font-bold font-manrope leading-9">
                10+
              </h4>
              <h5 className="text-gray-900 text-lg font-semibold">Years</h5>
              <p className="text-gray-500 text-sm font-normal leading-relaxed">
                Influencing Digital Landscapes Together
              </p>
            </div>

            <div className="w-full h-full p-6 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all duration-300 ease-in-out flex-col justify-start items-start gap-3 inline-flex bg-white">
              <h4 className="text-indigo-700 text-3xl font-bold font-manrope leading-9">
                2745+
              </h4>
              <h5 className="text-gray-900 text-lg font-semibold">
                Deployed Servers
              </h5>
              <p className="text-gray-500 text-sm font-normal leading-relaxed">
                Excellence Achieved Through Success
              </p>
            </div>

            <div className="w-full h-full p-6 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all duration-300 ease-in-out flex-col justify-start items-start gap-3 inline-flex bg-white">
              <h4 className="text-indigo-700 text-3xl font-bold font-manrope leading-9">
                12+
              </h4>
              <h5 className="text-gray-900 text-lg font-semibold">Awards</h5>
              <p className="text-gray-500 text-sm font-normal leading-relaxed">
                Our Dedication to Innovation Wins Understanding
              </p>
            </div>

            <div className="w-full h-full p-6 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all duration-300 ease-in-out flex-col justify-start items-start gap-3 inline-flex bg-white">
              <h4 className="text-indigo-700 text-3xl font-bold font-manrope leading-9">
                99%
              </h4>
              <h5 className="text-gray-900 text-lg font-semibold">
                Happy Clients
              </h5>
              <p className="text-gray-500 text-sm font-normal leading-relaxed">
                Mirrors our Focus on Client Satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}