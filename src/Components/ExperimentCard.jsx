import classNames from "classnames";
import React from "react";
import {
  dangerCard,
  infoCard,
  successCard,
  warningCard,
} from "../BootstrapStyles/Classes";
import "../Styles/ExperimentCard.scss";

function ExperimentCard({ experiment }) {
  const cardStyleCondition =
    experiment.status === "pending"
      ? classNames("exp-card", dangerCard)
      : experiment.status === "new"
      ? classNames("exp-card-new", warningCard)
      : experiment.status === "unassigned"
      ? classNames("exp-card", infoCard)
      : classNames("exp-card", successCard);

  return (
    <>
      <div className="col-6 p-2 ">
        <div className={cardStyleCondition}>
          <div className="row pt-3  ">
            <div className="col-12 text-center">
              <h6>{experiment.type}</h6>
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
