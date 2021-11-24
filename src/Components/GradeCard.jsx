import classNames from "classnames";
import React from "react";
import { result } from "../Data/Data";
import "../Styles/GradeCard.css";

function GradeCard() {
  return (
    <div className="row pb-2 ">
      <div className="col-12 card py-2 px-2">
        <h5 className="headline">Average Grade</h5>
        <h1 className={classNames(result.status, "text-center")}>
          {result.amount}% / {result.grade}
        </h1>
      </div>
    </div>
  );
}

export default GradeCard;
