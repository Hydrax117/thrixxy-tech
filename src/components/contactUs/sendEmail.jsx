import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const EmailContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_9y1nnex",
        "template_xdib0ea",
        form.current,
        "NQNp4getvBlU8KslA"
      )
      .then(
        (result) => {
          toast.success("email was sent successfully");
          setInterval(() => {
            window.location.reload();
          }, 4000);
          // show the user a success message
        },
        (error) => {
          // show the user an error
          toast.error("email was not sent try again");
        }
      );
  };

  return (
    <>
      <div>
        <ToastContainer style={{ marginTop: "25%" }} />
      </div>
      <form ref={form} onSubmit={sendEmail} method="POST">
        <label>Name</label>
        <input className="form-control" type="text" name="name" />
        <label>Subject</label>
        <input type="text" className="form-control" name="subject" />
        <label>Email</label>
        <input type="email" className="form-control" name="email" />
        <label>Message</label>
        <textarea name="message" className="form-control" />
        <input type="submit" className="btn btn-dark mt-2" value="Send" />
      </form>
    </>
  );
};

export default EmailContactForm;
