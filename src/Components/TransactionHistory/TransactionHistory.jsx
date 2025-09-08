import React from "react";
import transactions from "./transactions.json";
import "./TransactionHistory.css";

const TransactionHistory = () => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(tx => (
          <tr key={tx.id}>
            <td>{tx.type}</td>
            <td>{tx.amount}</td>
            <td>{tx.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
