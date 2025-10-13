import { useContext } from "react";
import { ScrollContext } from "../../App";

function Experience() {
  const { experienceRef } = useContext(ScrollContext);
  return (
    <section id="experience" ref={experienceRef} className="section-container">
      <h1 className="section-title">EXPERIENCE</h1>

      <div className="flex w-4/5 flex-col items-start gap-6 md:flex-row md:items-start md:gap-10">
        <div className="order-2 w-full text-left md:order-1 md:w-1/2">
          <div className="mb-4">
            <h2 className="text-xl font-bold sm:text-2xl">
              Backend Developer Intern | EFG Holding
            </h2>
            <p className="text-sm font-semibold text-gray-500">
              June 2025 – July 2025 | Smart Village, Giza
            </p>
          </div>

          <ul className="mb-4 list-disc space-y-2 pl-5 font-semibold">
            <li>
              Built a full-stack .NET application using C#, WebAPI, and Clean
              Architecture.
            </li>
            <li>
              Implemented containerization (Docker), message brokering (RabbitMQ),
              real-time updates (SignalR), caching (Redis), and file-based logging
              with Serilog.
            </li>
            <li>
              Developed authentication with access and refresh tokens, used ORM
              for persistence, and created a WinForms client interface.
            </li>
          </ul>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="https://github.com/OmarAyman1234/EFG_InternProj"
              target="_blank"
              rel="noreferrer"
              className="text-acc1 underline duration-150 hover:text-blue-700"
            >
              GitHub Repository
            </a>
            <a
              href="https://drive.google.com/file/d/1kKRAl_4-bUyP2Pr5lYNpm0-MaQVLMqV5/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="text-acc1 underline duration-150 hover:text-blue-700"
            >
              Demo
            </a>
          </div>
        </div>

        <div className="order-1 w-full md:order-2 md:w-1/2">
          <img
            src="/assets/images/efg-intern-proj.png"
            alt="Order Manager app screenshot from EFG internship project"
            className="mx-auto rounded-md border border-gray-700/50 shadow-lg shadow-black/20"
          />
          <img
            src="/assets/images/efg-intern-docker.png"
            alt="Dockerized microservices and containers used during the internship"
            className="mx-auto mt-4 rounded-md border border-gray-700/50 shadow-lg shadow-black/20"
          />
        </div>
      </div>
    </section>
  );
}

export default Experience;



