import React from "react";

export default function Footer() {
  return (
    <>
      <div className="mt-8">
        <p>Find me on:</p>
        <a
          href="https://github.com/saitejavarman"
          className="text-secondary hover:underline mr-4"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/saiteja-nagaraju"
          className="text-secondary hover:underline mr-4"
        >
          LinkedIn
        </a>
        <a
          href="mailto:saitejavarman@gmail.com"
          className="text-secondary hover:underline"
        >
          Email
        </a>
      </div>
      <footer className="bg-white border-t py-4 mt-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          &copy; {new Date().getFullYear()} Sai Teja Varma. All rights reserved.
        </div>
      </footer>
    </>
  );
}
