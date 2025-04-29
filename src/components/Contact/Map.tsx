"use client"
import React, { useEffect, useState } from "react";

const Map = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
       (
    <div className="relative w-full min-h-screen">
      {/* For large screens: map as background */}
      <div className="hidden lg:block absolute inset-0 z-0">
        {isClient && (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d452.0025112384524!2d67.05666020241203!3d24.999433301454214!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3410fbe6d33e1%3A0xd12693a3acd4244d!2sSector%205-A%2F3%20Sector%205%20A%203%20New%20Karachi%20Town%2C%20Karachi!5e0!3m2!1sen!2s!4v1745956928424!5m2!1sen!2s"
            className="w-full h-full brightness-75"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}
      </div>

      {/* For small/medium screens: map block */}
      <div className="lg:hidden w-full h-72 relative z-0">
        {isClient && (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d452.0025112384524!2d67.05666020241203!3d24.999433301454214!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3410fbe6d33e1%3A0xd12693a3acd4244d!2sSector%205-A%2F3%20Sector%205%20A%203%20New%20Karachi%20Town%2C%20Karachi!5e0!3m2!1sen!2s!4v1745956928424!5m2!1sen!2s"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}
      </div>

      {/* Contact Form */}
      <div className="relative z-10 flex items-center justify-center min-h-[80vh] p-6 lg:absolute lg:top-1/2 lg:right-6 lg:transform lg:-translate-y-1/2">
        <div className="w-full max-w-md bg-white/95 backdrop-blur-md shadow-xl p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Us</h2>
          <form action="#" method="POST" className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Map;
