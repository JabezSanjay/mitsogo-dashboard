import React from "react";
import HamburgerMenu from "../../images/menu/menuIcon.svg";
import SearchIcon from "../../images/menu/searchIcon.svg";
import NotificationIcon from "../../images/menu/notificationIcon.svg";
import ProfileIcon from "../../images/menu/profileIcon.svg";
import BillingIcon from "../../images/menu/billingIcon.svg";
import LogoutIcon from "../../images/menu/logoutIcon.svg";
import avatarImage from "../../images/menu/avatarImage.png";
import "../../index.css";

const Navbar = () => {
  return (
    <nav className="p-4 bg-white shadow-sm">
      <div className="flex items-center">
        <img src={HamburgerMenu} alt="" className="cursor-pointer pr-4" />
        <div className="flex w-60 sm:w-full">
          <img src={SearchIcon} alt="" className="cursor-pointer m-2 w-5" />
          <input
            type="text"
            placeholder="Search transactions, invoices or help"
            className="w-full focus:outline-none placeholder-mainColor placeholder-opacity-90 text-mainColor text-sm hidden md:block"
          />
        </div>

        <div className="flex">
          <img
            src={NotificationIcon}
            alt=""
            className="cursor-pointer pr-4 w-9"
          />
          <div class="flex items-center justify-center">
            <div class=" relative inline-block text-left dropdown">
              <span class="rounded-md shadow-sm">
                <button
                  class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium transition duration-150 ease-in-out bg-white rounded-md hover:text-gray-500 focus:outline-none"
                  type="button"
                >
                  <span className="text-lightGray opacity-70">John</span>
                  <svg
                    class="w-5 h-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    color="#4D4F5C"
                    opacity="0.5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </span>
              <div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                <div
                  class="absolute right-0 w-44 mt-2 py-3 origin-top-right bg-white rounded-md shadow-lg outline-none"
                  aria-labelledby="headlessui-menu-button-1"
                  id="headlessui-menu-items-117"
                  role="menu"
                >
                  <div class="flex px-4 py-2 cursor-pointer">
                    <img src={ProfileIcon} alt="" className="w-5 mr-4" />
                    <p class="text-sm font-medium leading-5">My Profile</p>
                  </div>
                  <div class="flex px-4 py-2 cursor-pointer">
                    <img src={BillingIcon} alt="" className="w-5 mr-4" />
                    <p class="text-sm font-medium leading-5">Billing</p>
                  </div>
                  <div class="flex px-4 py-2 cursor-pointer">
                    <img src={LogoutIcon} alt="" className=" w-5 mr-4" />
                    <p class="text-sm font-medium leading-5 text-mainColor">
                      Logout
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <img src={avatarImage} alt="" className="cursor-pointer mr-7 w-7" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
