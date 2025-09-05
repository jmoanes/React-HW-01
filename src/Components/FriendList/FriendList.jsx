import React from "react";
import friends from "./friends.json";
import "./FriendList.css";

const FriendList = () => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li key={friend.id} className={friend.isOnline ? "online" : "offline"}>
          <img src={friend.avatar} alt={friend.name} />
          <p>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
