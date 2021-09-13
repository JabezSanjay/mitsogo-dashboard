import React from "react";
import LogoImage from "../../images/Sidebar/logoImage.png";
import HomeIcon from "../../images/Sidebar/homeIcon.svg";
import DashboardIcon from "../../images/Sidebar/dashboardIcon.svg";
import InboxIcon from "../../images/Sidebar/inboxIcon.svg";
import ProductsIcon from "../../images/Sidebar/productsIcon.svg";
import AdminIcon from "../../images/Sidebar/adminIcon.svg";

const Sidebar = ({ open }) => {
  const tabs = [
    { name: "Home", svg: HomeIcon },
    { name: "Dashboard", svg: DashboardIcon },
    { name: "Inbox", svg: InboxIcon },
    { name: "Products", svg: ProductsIcon },
    { name: "Admin", svg: AdminIcon },
  ];

  return (
    <aside
      className={`${open} min-h-full w-full sm:w-1/6 bg-mainColor active:bg-white`}
    >
      <div className="p-5 flex items-center h-16 bg-darkMainColor lg:w-96">
        <img src={LogoImage} alt="logo" className="w-20" />
      </div>
      <div>
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className="p-5 flex items-center  hover:bg-darkMainColor border-l-2 border-mainColor hover:border-activePurple cursor-default"
          >
            <img src={tab.svg} alt="logo" />
            <a href="/" className="ml-4 text-white">
              {tab.name}
            </a>
            {tab.name === "Inbox" && (
              <div className="ml-7 bg-warningRed text-white rounded-xl px-2 text-xs">
                <p>New</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
