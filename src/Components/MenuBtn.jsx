import classNames from "classnames";
import React from "react";

function MenuBtn({ icon, name, selected, btn_id, setSelected }) {
  return (
    <div
      className={classNames(
        "row d-flex p-2 justify-content-center",
        "btn-wrap"
      )}
      onClick={() => setSelected(btn_id)}
    >
      <div className="col-1   ">
        <img
          src={
            selected === btn_id
              ? `Imgs/Icons/${icon + "-sel"}.ico`
              : `Imgs/Icons/${icon}.ico`
          }
          className="icon"
          alt="School Logo"
        />
      </div>
      <div className="col-6 pt-2 mx-4  ">
        <h6 className={selected === btn_id ? "btn-text-sel" : "btn-text"}>
          {" "}
          {name}
        </h6>
      </div>
    </div>
  );
}

export default MenuBtn;
