import React from "react";
import ExperimentCard from "./ExperimentCard";
import StudentAbility from "./StudentAbility";
import { experiments, studentAnalysis } from "../Data/Data.js";
import GradeCard from "./GradeCard";
import RecentTrophies from "./RecentTrophies";
import "../Styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-content">
      <div className="row px-5">
        <div className="col-12 py-4 ">
          <h2 className="dashboard-title">Student Dashboard</h2>
        </div>
      </div>
      <div className="row px-5">
        <div className="col-6">
          <div className="row">
            {experiments.map((experiment, index) => {
              return <ExperimentCard key={index} experiment={experiment} />;
            })}
          </div>
        </div>

        <div className="col-3 mx-3 py-2">
          <div className="row">
            <div className="col-12 p-4 card">
              {studentAnalysis.map((ability, index) => {
                return <StudentAbility key={index} ability={ability} />;
              })}
            </div>
          </div>
        </div>

        <div className="col-2 mx-2">
          <GradeCard />
          <RecentTrophies />
        </div>
      </div>

      <div className="row px-5">
        <div className="col-12 py-4 ">
          <h4 className="experiment-list">Pending & New Experiments</h4>
        </div>
      </div>

      <div className="row px-5 ">
        <div className="col-12 card">
          <div>Card 1</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
