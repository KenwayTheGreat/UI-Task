import classNames from "classnames";
import React from "react";
import "../Styles/ExperimentRow.css";

function ExperimentRow({ row }) {
  return (
    <div
      className={
        row.status === "pending"
          ? classNames("row px-5", "pending-row")
          : classNames("row px-5", "new-row")
      }
    >
      <div className="col-3">
        <p className="text-row"> {row.name}</p>
      </div>
      <div className="col-3">
        <p className="text-row"> {row.subject}</p>
      </div>
      <div className="col-3">
        <p className="text-grade">
          {" "}
          {row.requirements.grade} / {row.requirements.total}
        </p>
      </div>
      <div className="col-3">
        <p className="text-row">{row.deadline}</p>
      </div>
    </div>
  );
}

export default ExperimentRow;
