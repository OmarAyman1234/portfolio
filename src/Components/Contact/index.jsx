import { useContext } from "react";
import { ScrollContext } from "../../App";

import ContactMethods from "./ContactMethods";
function Contact() {
  const { contactRef } = useContext(ScrollContext);

  return (
    <section id="contact" ref={contactRef} className="section-container">
      <h1 className="section-title">CONTACT ME</h1>

      <p className="mb-4 w-10/12 text-center text-lg text-gray-700 md:w-8/12 lg:w-7/12">
        I’d love to hear from you! Whether it's a project inquiry or just a
        chat, feel free to reach out anytime!
      </p>

      <ContactMethods />
    </section>
  );
}
export default Contact;
