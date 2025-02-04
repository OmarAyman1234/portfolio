import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";
function FormMessage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formRef = useRef(null);

  const [isSubmitting, setIsSubmitting] = useState(false); //If the user submitting the form or not

  const handleSubmit = async (e) => {
    e.preventDefault(); //prevent the default behavior of the form which is reloading the page
    setIsSubmitting(true); // Show loading state
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxLKmn_q68GhTUu90dwVxCTKXwo7g_CCiooc-qQD6qnJtH-iL-J-8YiEXgZNlkhJpJK/exec";

    try {
      //Post the data to Google Sheets file
      await fetch(scriptURL, {
        method: "POST",
        body: new FormData(formRef.current),
      });
      //Send success toast
      toast.success("Message sent! Thank you for contacting me!");
      //Restart input data
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      //Check if the error is from internet connect
      if (!navigator.onLine) {
        toast.error("Check your internet connection!");
      } else toast.error(`${error.message}`);
    } finally {
      // Hide loading state
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <h2 className="section-h2">Send A Message</h2>
      <form
        onSubmit={handleSubmit}
        ref={formRef}
        className="mb-4 flex w-10/12 flex-col justify-between rounded-md border-2 border-gray-300 bg-gray-100 px-2 py-2 shadow-md hover:shadow-lg md:w-8/12 lg:w-7/12"
      >
        <h2 className="my-2 text-center text-xl font-bold text-gray-800">
          Let’s Connect!
        </h2>
        {isSubmitting ? (
          <div className="flex h-72 items-center justify-center text-2xl">
            <FontAwesomeIcon
              icon={faCircleNotch}
              className="animate-spin text-acc1"
            />
            <p>&nbsp;</p>
            <p>Submitting . . . </p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <input
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              type="text"
              name="Name"
              placeholder="Your name"
              required
              className="my-3 w-11/12 rounded-md border-2 border-gray-300 py-1 pl-1 text-left duration-200 hover:border-acc1 focus:outline-acc2"
            />
            <input
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              type="email"
              name="Email"
              placeholder="Your email"
              required
              className="my-3 w-11/12 rounded-md border-2 border-gray-300 py-1 pl-1 text-left duration-200 hover:border-acc1 focus:outline-acc2"
            />
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
              rows={3}
              type="text"
              name="Message"
              placeholder="Message"
              required
              className="my-3 w-11/12 rounded-md border-2 border-gray-300 py-1 pl-1 text-left duration-200 hover:border-acc1 focus:outline-acc2"
            />
            <button
              type="submit"
              className="my-3 scale-105 rounded-lg bg-acc1 px-7 py-2 text-center text-sm font-semibold text-white transition-all hover:bg-acc2 hover:shadow-md"
            >
              Submit
            </button>
          </div>
        )}
      </form>
    </>
  );
}
export default FormMessage;
