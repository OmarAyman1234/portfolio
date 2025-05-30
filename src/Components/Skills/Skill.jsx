function Skill(props) {
  return (
    <div
      style={{ border: `3px solid ${props.borderColor}` }}
      className="flex min-w-[105px] max-w-[105px] flex-col items-center justify-center rounded-md bg-gray-100 px-4 py-2 duration-150 hover:scale-105 hover:bg-slate-200 sm:min-w-[115px] sm:max-w-[115px] lg:min-w-[120px] xl:max-w-[120px]"
    >
      <img className="w-12" src={props.img} alt={props.name} />
      <p className="text-lg font-semibold">{props.name}</p>
    </div>
  );
}

export default Skill;
