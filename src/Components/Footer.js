import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h1>ETHbangalore</h1>
            <h3 className="list-unstyled">
              <li>342-234-6969</li>
              <li>Bangalore, India</li>
              <li>122 North street</li>
            </h3>
          </div>
          {/* Column3 */}
          <div className="col">
            <ui className="list-unstyled">
              <li>name</li>
              <li>name</li>
              <li>name</li>
              <li>about</li>
            </ui>
          </div>
        </div>
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Sakshi Bharti | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;