function Project(props) {
  return (
    <div className="flex w-64 flex-col justify-between rounded-xl border border-gray-300 bg-gray-100 shadow-lg duration-150 hover:scale-[1.02] hover:shadow-xl">
      <img
        className="h-32 w-full rounded-t-xl"
        src={props.previewImg}
        alt={props.name}
      />
      <h3 className="px-3 pt-2 text-center text-lg font-semibold text-gray-900">
        {props.name}
      </h3>

      <div className="mt-1 flex flex-wrap justify-center gap-1 border-b border-t border-gray-300 bg-gray-50 px-2 py-1">
        {props.includedSkills.map((skill, skillIndex) => (
          <div className="group relative">
            <img
              key={skillIndex}
              className="w-6 duration-150 hover:scale-110"
              src={skill.img}
              alt={skill.name}
            />
            <div className="pointer-events-none absolute top-7 rounded bg-gray-800 p-0.5 text-sm text-gray-200 opacity-0 duration-150 group-hover:opacity-100">
              {skill.name}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-grow items-center">
        <p className="px-3 py-2 text-center text-sm leading-snug text-gray-700">
          {props.description}
        </p>
      </div>

      <div className="flex justify-evenly gap-2 px-3 pb-3">
        {props.demo.length > 0 ? (
          <a
            href={props.demo}
            target="_blank"
            className="w-full scale-105 rounded-lg bg-acc1 px-2 py-1 text-center text-sm font-semibold text-white transition-all hover:bg-acc2 hover:shadow-md"
          >
            Demo
          </a>
        ) : (
          ""
        )}

        {props.sourceCode.length > 0 ? (
          <a
            href={props.sourceCode}
            target="_blank"
            className="w-full scale-105 rounded-lg bg-acc1 px-2 py-1 text-center text-sm font-semibold text-white transition-all hover:bg-acc2 hover:shadow-md"
          >
            Source Code
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Project;
