import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[black]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-white">
        <p className="text-[#357a3a]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Daniel Ochoa
        </h1>
        <h2 className="text-4xl sm-text-7xl font-bold text-[#8892b0]">
          I'm an aspiring Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Seeking an entry-level position in software engineering or
          cybersecurity, with proficiency in a wide range of programming
          languages and frameworks, including React.js, Django, Flask, and
          Node.js. Eager to leverage my skills and education in computer science
          to contribute effectively to innovative projects.
        </p>
        <div>
          <button
            href=""
            className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#357a3a] hover:border-[#357a3a]"
          >
            <Link to="work" smooth={true} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
