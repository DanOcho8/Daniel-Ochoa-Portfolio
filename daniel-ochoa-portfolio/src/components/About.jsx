import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[black] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Daniel, nice to meet you! Have a look at some of my work.
            </p>
          </div>
          <div>
            <p>
              Experienced and versatile in front-end development, specializing
              in React with a strong track record of delivering user-centric
              solutions. Skilled in crafting dynamic and intuitive user
              interfaces to enhance user experiences. Seeking an entry-level
              position in software engineering or cybersecurity, with
              proficiency in a wide range of programming languages and
              frameworks, including React.js, Django, Flask, and Node.js. Eager
              to leverage my skills and education in computer science to
              contribute effectively to innovative projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
