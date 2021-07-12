import React from "react";

function Footer() {
  const date = new Date();
  const copyright = date.getFullYear();
  return (
    <div>
      <footer>
        <div className="footer-wrapper">
          <p>Copyright {copyright}</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
