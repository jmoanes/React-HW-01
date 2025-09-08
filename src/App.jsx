import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Profile from "./Components/Profile/Profile";
import Statistics from "./Components/Statistics/Statistics";
import FriendList from "./Components/FriendList/FriendList";
import TransactionHistory from "./Components/TransactionHistory/TransactionHistory";

function App() {
  return (
    <Router basename="">
      <div>
        <nav style={{ margin: "20px", textAlign: "center" }}>
          <Link to="/profile" style={{ margin: "0 10px" }}>Profile</Link>
          <Link to="/statistics" style={{ margin: "0 10px" }}>Statistics</Link>
          <Link to="/friends" style={{ margin: "0 10px" }}>Friend List</Link>
          <Link to="/transactions" style={{ margin: "0 10px" }}>Transaction History</Link>
        </nav>

        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/friends" element={<FriendList />} />
          <Route path="/transactions" element={<TransactionHistory />} />                                                                                                                                                     
          <Route path="/" element={<Profile />} /> {/* Default page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
