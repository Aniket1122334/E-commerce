import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
  const { isAuthenticated, user } = useAuth0();

  // State to manage form values
  const [formValues, setFormValues] = useState({
    username: isAuthenticated ? user.name : "",
    email: isAuthenticated ? user.email : "",
    message: "",
  });

  // Handler to update state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className="contact-container px-4 py-8">
      <h2 className="text-center text-4xl font-bold capitalize mb-8">
        Contact Us
      </h2>

      <iframe
        className="w-full h-80 mb-8"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.569702699804!2d77.06567507495826!3d28.672600082260978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04460435de33%3A0xecf0430866aa8233!2s91%2C%20C.%20R.%20Saini%20School%20Rd%2C%20Block%20A%2C%20Vandana%20Vihar%2C%20Nangloi%2C%20Delhi%2C%20110041!5e0!3m2!1sen!2sin!4v1721493606870!5m2!1sen!2sin"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="flex justify-center">
        <form
          action="https://formspree.io/f/xvgpzdey"
          method="POST"
          className="w-full max-w-xl bg-white p-8 shadow-lg rounded-lg"
        >
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-sm font-medium mb-2"
            >
              Your Name
            </label>
            <input
              id="username"
              className="w-full p-4 border-2 border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="username"
              value={formValues.username}
              placeholder="Enter Your Name"
              autoComplete="off"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              className="w-full p-4 border-2 border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              name="email"
              value={formValues.email}
              placeholder="Enter Your Email"
              autoComplete="off"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-4 border-2 border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="message"
              rows="6"
              value={formValues.message}
              placeholder="Your Message"
              autoComplete="off"
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white w-full py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
