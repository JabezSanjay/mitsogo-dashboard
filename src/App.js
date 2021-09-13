import React from "react";
import Navbar from "./Components/Navbar";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div>
      <div>
        <Navbar>
          <Dashboard />
        </Navbar>
      </div>
      <div></div>
    </div>
  );
};

export default App;
