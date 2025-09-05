import React from "react";
import data from "./data.json";
import "./Statistics.css";

const Statistics = () => {
  return (
    <section className="statistics">
      <h2>UPLOAD STAT</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.label}: {item.percentage}%
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
