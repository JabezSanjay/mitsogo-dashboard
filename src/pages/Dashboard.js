import React from "react";
import Button from "../Components/Button";
import PlusIcon from "../images/Button/plus.svg";
import PersonalCard from "../Components/Card/PersonalCard";
import StatisticsCard from "../Components/Card/StatisticsCard";

const Dashboard = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-between mt-3 mb-3">
        <h2 className="text-2xl font-semibold py-5 text-mainColor">Overview</h2>
        <Button name="Add Funds" svg={PlusIcon} />
      </div>
      <div className="flex flex-wrap justify-evenly">
        <StatisticsCard type="graph" />
        <StatisticsCard />
        <PersonalCard />
      </div>
    </div>
  );
};

export default Dashboard;
