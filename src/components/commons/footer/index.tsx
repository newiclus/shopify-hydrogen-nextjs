import React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="main-footer">
      <ul className="max-w-7xl m-auto">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about-us">About us</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
