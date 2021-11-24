import React from "react";

function Profile() {
  return (
    <div className="profile-section">
      <img
        className="profile-medal"
        src={"Imgs/medal.png"}
        width="35px"
        height="35px"
        alt="medal"
      />
      <div className="row">
        <div className="col-12 d-flex justify-content-center pt-5">
          <img
            className="profile-picture"
            src="Imgs/student.png"
            alt="Student Profile"
          />
        </div>
      </div>

      <div className="row  ">
        <div className="col-12 pt-2 text-center">
          <h4 className="profile-name">Ahmed Amir Salem</h4>
        </div>
      </div>

      <div className="row  ">
        <div className="col-12 pb-3 text-center">
          <h4 className="profile-name">Grade # 11</h4>
        </div>
      </div>
    </div>
  );
}

export default Profile;
