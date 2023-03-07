import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/bf90e893-5034-4ebd-9a57-db508bcde013"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#FE3A4A] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email
          </p>
        </div>
        <input
          className="border-2 rounded-md border-gray-300 p-2"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className="border-2 rounded-md border-gray-300 p-2 my-4"
          type="email"
          name="email"
          placeholder="Email"
        />
        <textarea
          className="border-2 rounded-md border-gray-700 p-2"
          name="message"
          placeholder="Message"
          rows="8"
        ></textarea>
        <button className="text-gray-300 border-2 border-gray-300 hover:bg-[#FE3A4A] hover:border-[#FE3A4A] hover:text-white px-4 py-2 my-6 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
