import React from "react";
import user from "./user.json";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-card">
      <img src={user.avatar} alt={user.username} className="avatar" />
      <h2>{user.username}</h2>
      <p>{user.tag}</p>
      <p>{user.location}</p>
      <ul className="stats">
        <li><span>Followers: </span>{user.stats.followers}</li>
        <li><span>Views: </span>{user.stats.views}</li>
        <li><span>Likes: </span>{user.stats.likes}</li>
      </ul>
    </div>
  );
};

export default Profile;
