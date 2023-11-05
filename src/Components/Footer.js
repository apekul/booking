import React from "react";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-[#2E2E2E] text-white">
      <div className="Container h-14 flex items-center justify-between">
        <p>Copyright © 2023. All rights are reserved</p>
        <p>
          Coded by{" "}
          <a
            target="_blank"
            href="https://github.com/apekul"
            className="font-bold"
            rel="noreferrer"
          >
            apekul
          </a>
        </p>
      </div>
    </footer>
  );
};
