import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
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
            src="assets/images/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Venkata Kartheek</p>
            <p className="subtext">
              Final-year CS undergraduate who builds AI-native products end to end — LLM agents, RAG pipelines, and the evaluation loops that tell you whether they actually work — across React/Next.js, Node.js/FastAPI, and SQL/NoSQL. Comfortable shipping fast in problem spaces that don't have a settled answer yet.
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
              Bengaluru, Karnataka, India
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
              <b>Languages:</b> JavaScript, TypeScript, Python, Java, SQL<br/>
              <b>Frontend:</b> React.js, Next.js, Tailwind CSS<br/>
              <b>Backend & Systems:</b> Node.js, Express.js, FastAPI, REST APIs, WebSockets, Microservices, CI/CD<br/>
              <b>Databases:</b> PostgreSQL, MongoDB, Redis, Vector DBs (Qdrant, Pinecone, ChromaDB)<br/>
              <b>AI/Agentic:</b> LLMs, RAG Pipelines, Agent Orchestration (LangChain, LangGraph), Prompt Engineering, Explainable ML (SHAP)<br/>
              <b>Core CS:</b> Data Structures & Algorithms, Operating Systems, Computer Networks, OOP, DBMS<br/>
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
            <b>Conference Paper</b> accepted at the FICTA 2026 International Conference for a multimodal graph-based recommendation system.<br/>
            <b>Hackathon Team Lead</b> — led teams across 6 hackathons; Runner-up, Leap Hackathon (Government of India); Winner, GeeksForGeeks Hackathon "HackVyuha 2k25" (SRM University AP) for "Her Haven" — a SaaS platform for women's health and safety; Runner-up, AI Hackathon (Andhra University) for a Smart Farmer Assistance App.<br/>
            <b>Oracle Certified Professional:</b> Java SE 17 Developer.<br/>
            <b>IBM Full Stack Software Developer</b> Professional Certificate — Coursera.<br/>
            <b>100 Days of Code:</b> The Complete Python Pro Bootcamp — Udemy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
