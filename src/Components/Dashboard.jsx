import React from "react";
import ExperimentCard from "./ExperimentCard";
import StudentAbility from "./StudentAbility";
import GradeCard from "./GradeCard";
import RecentTrophies from "./RecentTrophies";
import ExperimentRow from "./ExperimentRow";
import {
  experiments,
  studentAnalysis,
  pendingExperiments,
} from "../Data/Data.js";
import "../Styles/Dashboard.css";
import classNames from "classnames";

function Dashboard() {
  return (
    <>
      <div className="row px-5">
        <div className="col-12 py-4 ">
          <h2 className="dashboard-title">Student Dashboard</h2>
        </div>
      </div>
      <div className="row px-5">
        <div className="col-5">
          <div className="row">
            {experiments.map((experiment, index) => {
              return <ExperimentCard key={index} experiment={experiment} />;
            })}
          </div>
        </div>

        <div className="col-4 mx-3 p-3 card">
          {studentAnalysis.map((ability, index) => {
            return <StudentAbility key={index} ability={ability} />;
          })}
        </div>

        <div className="col-2 mx-1">
          <GradeCard />
          <RecentTrophies />
        </div>
      </div>

      <div className="row px-5">
        <div className="col-12 py-4 ">
          <h4 className="experiment-list">Pending & New Experiments</h4>
        </div>
      </div>

      <div className={classNames("row px-5 pb-5")}>
        <div className={classNames("col-12 card  px-5 py-3")}>
          <div className="row px-3">
            <div className="col-3">
              <p className="table-title-text"> Name</p>
            </div>
            <div className="col-3">
              <p className="table-title-text"> Subject</p>
            </div>
            <div className="col-3">
              <p className="table-title-text"> Requirements</p>
            </div>
            <div className="col-3">
              <p className="table-title-text"> Deadline</p>
            </div>
          </div>

          {pendingExperiments.map((experiment) => (
            <div className="row py-2">
              <ExperimentRow row={experiment} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
