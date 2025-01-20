function GmailIcon() {
  return (
    <a
      href="https://mail.google.com/mail/?view=cm&tf=1&to=omarayman9124@gmail.com"
      target="_blank"
    >
      <div className="group/gmail relative">
        <div className="rounded-full p-3 group-hover/gmail:bg-gray-600">
          <img
            src="/src/assets/icons/gmail_icon.svg"
            className="h-9 w-9"
            alt="Gmail"
          />
        </div>

        <div className="absolute -bottom-7 -left-[52px] hidden w-40 rounded-md bg-gray-600 px-1 text-center font-bold group-hover/gmail:block sm:-bottom-8 sm:-left-12 sm:text-lg">
          Contact via Gmail
        </div>
      </div>
    </a>
  );
}
export default GmailIcon;
