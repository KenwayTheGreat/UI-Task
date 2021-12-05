import classNames from "classnames";
import React from "react";

function MenuBtn({ icon, name, selected, btn_id, setSelected }) {
  return (
    <div
      className={classNames(
        "row d-flex pb-2 justify-content-center",
        "btn-wrap"
      )}
      onClick={() => setSelected(btn_id)}
    >
      <div className="col-2 p-1 ">
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
      <div className="col-8 p-2">
        <h5 className={selected === btn_id ? "btn-text-sel" : "btn-text"}>
          {" "}
          {name}
        </h5>
      </div>
    </div>
  );
}

export default MenuBtn;
