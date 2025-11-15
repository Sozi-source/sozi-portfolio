import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 md:px-20 py-20"
    >
      <div className="max-w-4xl w-full bg-white p-10 rounded-xl shadow-lg flex flex-col md:flex-row gap-10">
        
        {/* Contact Info */}
        <div className="md:w-1/2 flex flex-col justify-center gap-6">
          <h2 className="text-4xl font-bold mb-4 text-blue-600">Contact Me</h2>
          <p className="text-gray-700 text-lg">
            Feel free to reach out for collaborations, projects, or just to say hi!
          </p>
          <div className="text-gray-700 text-lg space-y-2">
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:osoziw@gmail.com" className="hover:underline">
                osoziw@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold">Phone:</span>{" "}
              <a href="tel:+254711390861" className="hover:underline">
                +254 711 390 861
              </a>
            </p>
            <p>
              <span className="font-semibold">Location:</span> Nairobi, Kenya
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4 text-2xl text-gray-700">
            <a
              href="https://www.linkedin.com/in/wilfred-osozi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Sozi-source"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/OsoziWilfred"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://web.facebook.com/osozi.wilfred1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-800"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2">
          <form className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              required
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white font-semibold py-3 rounded-md hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
