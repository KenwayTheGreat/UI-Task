import classNames from "classnames";
import React from "react";
import "../Styles/StudentAbility.css";

function StudentAbility({ ability }) {
  const valueStyle = {
    backgroundColor: "#17468F",
    width: ability.amount,
    height: "15px",
    borderRadius: "10px",
  };

  return (
    <>
      <div className="row">
        <div className={classNames("col-12", "skill-text")}>
          <h6>{ability.ability}</h6>
        </div>
      </div>

      <div className="row px-3">
        <div className={classNames("col-12", "skill-bar")}>
          <h6 className="skill-value">{ability.amount}</h6>
          <div style={valueStyle} />
        </div>
      </div>
    </>
  );
}

export default StudentAbility;
