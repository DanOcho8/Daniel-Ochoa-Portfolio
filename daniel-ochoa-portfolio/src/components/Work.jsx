import React from "react";
import Kongo from "../assets/KongoWebStoreHomepage.png";
import OwlsWolves from "../assets/OwlsAndWolvesHomepage.png";

const Work = () => {
  return (
    <div name="work" className=" w-full md:h-screen text-gray-300 bg-black">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#357a3a]">
            Projects
          </p>
          <p className="py-6">Check out some of my most recent work!</p>
        </div>
        {/* Container for Projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Items*/}
          <div
            style={{ backgroundImage: `url(${Kongo})` }}
            className="shadow-lg shadow-[#292828] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-gray-700 tracking-wider">
                E-Commerce Web Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Zapplu/Kongo-Web-Store">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${OwlsWolves})` }}
            className="shadow-lg shadow-[#292828] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-gray-700 tracking-wider">
                Barbershop Web Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://barberowlsandwolves.web.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/ecardenas31/BarberShopWeb">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
