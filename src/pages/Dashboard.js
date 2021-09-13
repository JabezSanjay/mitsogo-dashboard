import React from "react";
import Button from "../Components/Button";
import PlusIcon from "../images/Button/plus.svg";
import PersonalCard from "../Components/Card/PersonalCard";
import StatisticsCard from "../Components/Card/StatisticsCard";
import TableCard from "../Components/Card/TableCard";
import VideoCard from "../Components/Card/VideoCard";

const Dashboard = ({ open }) => {
  return (
    <div className={`${open} mt-12 p-4`}>
      <div className="flex flex-wrap justify-between my-3 mx-3">
        <h2 className="text-2xl font-semibold py-5 text-mainColor">Overview</h2>
        <Button name="Add Funds" svg={PlusIcon} />
      </div>
      <div className="flex flex-wrap">
        <StatisticsCard type="graph" />
        <StatisticsCard />
        <PersonalCard />
        <TableCard />
        <VideoCard />
      </div>
    </div>
  );
};

export default Dashboard;
