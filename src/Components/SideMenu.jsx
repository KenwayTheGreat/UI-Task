import React, { useState } from "react";
import Profile from "./Profile";
import MenuBtn from "./MenuBtn";
import { menu } from "../Data/Data";
import "../Styles/SideMenu.css";

function SideMenu() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="side-menu">
      <Profile />

      <div className="pb-2 pt-3">
        {menu.map((cell, index) => {
          return (
            <MenuBtn
              key={index}
              btn_id={index}
              selected={selected}
              name={cell.name}
              icon={cell.icon}
              setSelected={setSelected}
            />
          );
        })}
      </div>
      <div className="row">
        <div className="col-12 p-2 d-flex justify-content-center">
          <img src="Imgs/Logo.png" className="logo" alt="School Logo" />
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
