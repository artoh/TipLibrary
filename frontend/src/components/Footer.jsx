import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {currentYear} The TipLibrary Team</p>
    </footer>
  );
}

export default Footer;
