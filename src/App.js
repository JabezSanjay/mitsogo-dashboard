import React from "react";
import Navbar from "./Components/Navbar";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div className="min-h-screen bg-bodyColor">
      <div>
        <Navbar>
          <Dashboard />
        </Navbar>
      </div>
    </div>
  );
};

export default App;
