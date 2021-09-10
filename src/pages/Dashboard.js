import React from "react";
import Button from "../Components/Button";
import PlusIcon from "../images/Button/plus.svg";

const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-between flex-col sm:flex-row">
        <h2 className="text-2xl font-semibold py-5 mt-2 text-mainColor">
          Overview
        </h2>
        <Button name="Add Funds" svg={PlusIcon} />
      </div>
    </div>
  );
};

export default Dashboard;
