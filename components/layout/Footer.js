import React from "react";

const Footer = () => {
  return (
    <footer className="card-item border-t p-3 flex justify-center items-center gap-1 flex-col sm:flex-row">
      <span>
        &copy; {new Date().getFullYear()} by
        <a
          className="ml-1 font-semibold"
          href="https://www.mridul.tech/"
          target="_blank"
          rel="noreferrer"
        >
          Mridul
        </a>
        .
      </span>
      <span>
        Made with ❤ {"& "}
        <a
          className="ml-1 font-semibold"
          href="https://github.com/Mridul2820/git-o-get"
          target="_blank"
          rel="noreferrer"
        >
          {"<Code/>"}
        </a>
      </span>
    </footer>
  );
};

export default Footer;
