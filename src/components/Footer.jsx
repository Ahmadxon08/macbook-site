import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <p>
          More you ways to shop: Find an Apple Store or other retailer near you,
          Or call +998944995759
        </p>
        <img src="./logo.svg" alt="logo" />
      </div>
      <hr />
      <div className="links">
        <p>Copyrights &copy; 2024 Apple Inc. All rights reserved.</p>

        <ul>
          {footerLinks.map(({ label, link }) => (
            <li key={label}>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
