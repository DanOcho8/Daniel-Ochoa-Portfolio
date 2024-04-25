import React from "react";
import CPP from "../assets/c-logo.png";
import JavaScript from "../assets/javascript.png";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Python from "../assets/python-logo-only.png";
import GitHub from "../assets/github.png";
import R from "../assets/R_logo.svg.png";
import ReactLogo from "../assets/react.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-black text-gray-300">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">
            These are the technologies I have worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#292828] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML Icon"></img>
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#292828] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS Icon"></img>
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#292828] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="HTML Icon"
            ></img>
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#292828] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Python} alt="Python Icon"></img>
            <p className="my-4">Python</p>
          </div>
          <div className="shadow-md shadow-[#292828] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CPP} alt="C++ Icon"></img>
            <p className="my-4">C++</p>
          </div>
          <div className="shadow-md shadow-[#292828] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={R} alt="R Icon"></img>
            <p className="my-4">R</p>
          </div>
          <div className="shadow-md shadow-[#292828] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={ReactLogo}
              alt="React Icon"
            ></img>
            <p className="my-4">React.js</p>
          </div>
          <div className="shadow-md shadow-[#292828] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="GitHub Icon"></img>
            <p className="my-4">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
