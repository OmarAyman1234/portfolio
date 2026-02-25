import { useContext } from "react";
import { ScrollContext } from "../../App";

import ContactMethods from "./ContactMethods";
function Contact() {
  const { contactRef } = useContext(ScrollContext);

  return (
    <section id="contact" ref={contactRef} className="section-container">
      <h1 className="section-title">CONTACT ME</h1>

      <p className="mb-4 w-10/12 text-center text-lg text-gray-700 md:w-8/12 lg:w-7/12">
        Below are my contact methods, feel free to get in touch at any time!
      </p>

      <ContactMethods />
    </section>
  );
}
export default Contact;
