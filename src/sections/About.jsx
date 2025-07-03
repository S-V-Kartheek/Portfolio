import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Venkata Kartheek</p>
            <p className="subtext">
              I'm a developer pursuing B.Tech in Computer Science and Engineering (2023–2027) at SRM Institute of Science and Technology, Amaravati, India. I love building solutions in machine learning, web development, and automation.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="GRASP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Design Patterns"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Design Principles"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="SRP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/csharp-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/dotnet-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/blazor-pink.png"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Location</p>
            <p className="subtext">
              Andhra Pradesh, India
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[65%]">
            <p className="headText">Skills & Tech Stack</p>
            <p className="subtext">
              <b>Programming:</b> C++, Java, Python, JavaScript, TypeScript<br/>
              <b>Web Development:</b> HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Node.js, Express.js, MongoDB, MySQL, PostgreSQL, etc.<br/>
              <b>Machine Learning:</b> TensorFlow, Scikit-learn, Pandas, NumPy, Matplotlib, Seaborn, SciPy, etc.<br/>
              <b>Cloud:</b> AWS, Azure<br/>
              <b>Version Control:</b> Git, GitHub, GitLab, etc.<br/>
              <b>Operating Systems:</b> Windows, Linux, macOS, etc.<br/>
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[65%] md:scale-125">
            <Frameworks />
          </div>
        </div>
        {/* Achievement */}
        <div className="grid-default-color col-span-1 md:col-span-6 mt-4">
          <p className="headtext">Achievements</p>
          <p className="subtext">
            <b>Winner of HackVyuha 2k25</b> conducted by GeeksforGeeks for developing "Her Haven" - an Saas platform revolutionizing women's health and safety.<br/>
            <b>Runner-up in the AI Hackathon</b> conducted by Andhra University for developing a Smart Farmer Assistance App
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
