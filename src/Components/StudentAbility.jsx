import classNames from "classnames";
import React from "react";
import "../Styles/StudentAbility.css";

function StudentAbility({ ability }) {
  const valueStyle = {
    backgroundColor: "#17468F",
    width: ability.amount,
    height: "10px",
    borderRadius: "10px",
  };

  return (
    <>
      <div className="row py-1">
        <div className={classNames("col-12 ", "skill-text")}>
          <h6>
            {ability.ability}
            {": "}
            <span className="skill-value">{ability.amount}</span>
          </h6>
        </div>
        <div className="col-12">
          <div style={valueStyle} />
        </div>
      </div>
    </>
  );
}

export default StudentAbility;
