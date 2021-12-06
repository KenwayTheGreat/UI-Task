import React, { useState } from "react";
import Profile from "./Profile";
import MenuBtn from "./MenuBtn";
import { menu } from "../Data/Data";
import "../Styles/SideMenu.scss";

function SideMenu() {
  const [selected, setSelected] = useState(0);
  return (
    <>
      <div className="side-menu">
        <Profile />

        <div className="my-4">
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
        <div className="row p-2">
          <div className="col-12  d-flex justify-content-center">
            <img src="Imgs/Logo.png" className="logo" alt="School Logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SideMenu;
