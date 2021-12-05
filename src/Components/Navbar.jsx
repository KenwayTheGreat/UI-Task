import classNames from "classnames";
import React from "react";
import "../Styles/Navbar.scss";

function Navbar() {
  return (
    <div className={classNames("row d-flex justify-content-end", "nav-bar")}>
      <div className="col-2 py-2">
        <img
          className="nav-icon"
          src="Imgs/USA.png"
          width="50px"
          height="50px"
          alt="Language Icon"
        />

        <img
          className="nav-icon"
          src="Imgs/student.png"
          width="50px"
          height="50px"
          alt="Language Icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
