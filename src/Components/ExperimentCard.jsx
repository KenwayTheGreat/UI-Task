import classNames from "classnames";
import React from "react";
import "../Styles/ExperimentCard.css";

function ExperimentCard({ experiment }) {
  return (
    <>
      <div className="col-6 p-2 ">
        <div className={classNames(experiment.status, "px-2")}>
          <div className="row pt-3  ">
            <div className="col-12 text-center">
              <h4>{experiment.type}</h4>
            </div>
          </div>
          <div className="row pb-2 ">
            <div className="col-12 text-center">
              <h3>{experiment.amount}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExperimentCard;
