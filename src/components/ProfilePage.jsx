import React from "react";
import profileImage from "../Images/icon.png";
function ProfilePage() {
  return (
    <div className="container text-center">
      <h1>Naoto.K</h1>

      <img src={profileImage} className="profileImage" />
      <div class="row justify-content-center">
        <div class="col-md-4 service text-center">
          <p>趣味は読書とバスケ</p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
