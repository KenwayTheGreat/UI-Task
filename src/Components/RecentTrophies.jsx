import React from "react";
import { trophies } from "../Data/Data";

function RecentTrophies() {
  return (
    <div>
      <div className="row py-1">
        <div className="col-12 card py-2 px-3">
          <h5 className="headline">Recent trophies</h5>
          <div className="row">
            {trophies.map((trophy, index) => (
              <div key={index} className="col-4">
                <img
                  src={`Imgs/Trophies/${trophy.name}.png`}
                  width="50px"
                  height="50px"
                  alt="trophy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentTrophies;
