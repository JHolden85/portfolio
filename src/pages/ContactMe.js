import React, { useState } from 'react';
import emailjs, { init } from 'emailjs-com';

export default function ContactMe() {

  const [submitted, setSubmitted] = useState(false);

  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const EMAILJS_USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;

  function sendEmail(e) {
    e.preventDefault();

    setSubmitted(true);

    console.log("Here");

    return;

    init(EMAILJS_SERVICE_ID);

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, e.target, EMAILJS_USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 pt-20 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          {/* Title */}
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Me</h1>
          {/* Subtitle */}
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
          {
            !submitted && (
              <form className="lg:w-1/2 md:w-2/3 mx-auto" onSubmit={sendEmail}>
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                      {/* Name field */}
                      <input type="text" id="name" name="user_name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-400 focus:bg-white focus:ring-2 focus:ring-green-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                      {/* Email field */}
                      <input type="email" id="email" name="user_email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-400 focus:bg-white focus:ring-2 focus:ring-green-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                      {/* Message field */}
                      <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-400 focus:bg-white focus:ring-2 focus:ring-green-400 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    {/* Send Button */}
                    <input className="flex mx-auto text-white bg-green-400 border-0 py-2 px-8 focus:outline-none hover:bg-green-400 rounded text-lg" type="submit" value="Send" />
                  </div>
                </div>
              </form>
              )
            }
            {
              submitted && (
                <h1 className="text-2xl text-center mt-4  ">Thanks for your submission!</h1>
              )
            }
                
                {/* Bottom Info */}
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                  <a className="text-green-400" href="mailto:contact@christianpayne.dev">contact@christianpayne.dev</a>
                  <p className="leading-normal my-5">‪(657) 234-1562‬
                    <br/> La Habra, CA</p>
                  {/* Icons */}
                  <span className="inline-flex">
                    <a className="text-gray-500">
                    </a>
                    <a className="ml-4 text-gray-500">
                    </a>
                    <a className="ml-4 text-gray-500">
                    </a>
                    <a className="ml-4 text-gray-500">
                    </a>
                  </span>
                </div>
              
            
        </div>
      </div>
    </section>
  );
}