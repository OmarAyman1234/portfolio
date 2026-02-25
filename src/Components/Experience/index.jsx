import { useContext } from "react";
import { ScrollContext } from "../../App";
import { experience } from "../../Data/experience";

function Experience() {
  const { experienceRef } = useContext(ScrollContext);
  return (
    <section id="experience" ref={experienceRef} className="section-container">
      <h1 className="section-title">EXPERIENCE</h1>

      {experience.map((item, index) => (
        <div
          key={index}
          className="relative flex w-4/5 flex-col gap-10 pl-8 md:flex-row"
        >
          {/* Vertical Line */}
          <div className="absolute left-2 top-0 h-full w-[2px] bg-gray-700/40"></div>

          {/* Circle */}
          <div className="absolute left-[1px] top-2 h-4 w-4 rounded-full border-2 border-gray-700 bg-black"></div>

          {/* Content */}
          <div
            className={`w-full text-left ${
              item.images.length > 0 ? "md:w-1/2" : "md:w-full"
            }`}
          >
            <div className="mb-4">
              <h2 className="text-xl font-bold sm:text-2xl">
                {item.role} |{" "}
                
                <span className="relative inline-block group">
                  {item.company.url ? (
                    <a
                      href={item.company.url}
                      target="_blank"
                      rel="noreferrer"
                      className="underline duration-150 hover:text-acc1"
                    >
                      {item.company.name}
                    </a>
                  ) : (
                    item.company.name
                  )}

                  {/* Tooltip */}
                  {item.company.logo && (
                    <div className="pointer-events-none absolute left-full top-1/2 z-20 ml-4 w-40 -translate-y-1/2 rounded-md border border-gray-700/40 bg-gray-100 p-3 shadow-lg opacity-0 transition-all duration-200 group-hover:opacity-100">
                      
                      {/* Optional Arrow */}
                      <div className="absolute left-[-6px] top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 border-l border-b border-gray-700/40 bg-gray-100"></div>

                      <img
                        src={item.company.logo}
                        alt={`${item.company.name} logo`}
                        className="mx-auto object-contain"
                      />
                    </div>
                  )}

                </span>
              </h2>

              <p className="text-sm font-semibold text-gray-500">
                {item.period} | {item.location}
              </p>
            </div>

            <ul className="mb-4 list-disc space-y-2 pl-5 font-semibold">
              {item.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
              {item.links.github && (
                <a
                  href={item.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-acc1 underline duration-150 hover:text-blue-700"
                >
                  GitHub Repository
                </a>
              )}

              {item.links.demo && (
                <a
                  href={item.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-acc1 underline duration-150 hover:text-blue-700"
                >
                  Demo
                </a>
              )}
            </div>
          </div>

          {/* Images if exist */}
          {item.images.length > 0 && (
            <div className="w-full md:w-1/2">
              {item.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${item.company.name} preview ${i + 1}`}
                  className="mx-auto mt-4 rounded-md border border-gray-700/50 shadow-lg shadow-black/20"
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default Experience;



