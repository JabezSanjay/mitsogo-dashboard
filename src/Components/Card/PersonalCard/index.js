import React from "react";
import ProfileImage from "../../../images/Dashboard/profileImage.png";
import TwitterIcon from "../../../images/Social/twitter.svg";
import FacebookIcon from "../../../images/Social/facebook.svg";
import LinkedinIcon from "../../../images/Social/linkedin.svg";
import WhatsappIcon from "../../../images/Social/whatsapp.svg";
import OptionsIcon from "../../../images/Card/options.svg";
import ProfileImage1 from "../../../images/Card/profilePic1.png";
import ProfileImage2 from "../../../images/Card/profilePic2.png";
import ProfileImage3 from "../../../images/Card/profilePic3.png";

const PersonalCard = () => {
  const profiles = [
    { name: "Drew James", svg: ProfileImage1 },
    { name: "Bavid Kames", svg: ProfileImage2 },
    { name: "Lavid Emes", svg: ProfileImage3 },
  ];

  return (
    <div className="p-2 lg:p-3 w-full lg:w-1/3 order-first sm:order-3">
      <div className="bg-white px-8 pt-12 pb-14 rounded-lg">
        <div>
          <div className="flex flex-col  items-center border-b-2 border-bodyColor">
            <img
              src={ProfileImage}
              alt=""
              srcSet=""
              className="justify-center w-1/4 sm:w-1/6"
            />
            <h3 className="text-mainColor font-semibold mt-2 mb-1">
              Nick Herasimenka
            </h3>
            <p className="text-mainColor opacity-50 text-sm">United States</p>
            <div className="flex items-center mt-4 gap-2 mb-7 ">
              <img src={TwitterIcon} alt="" srcSet="" />
              <img src={FacebookIcon} alt="" srcSet="" />
              <img src={LinkedinIcon} alt="" srcSet="" />
              <img src={WhatsappIcon} alt="" srcSet="" />
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-between">
          <h3 className="text-lg text-mainColor">Our Users</h3>
          <img src={OptionsIcon} alt="" />
        </div>
        {profiles.map((profile) => (
          <div className="mt-5 flex" key={profile.name}>
            <img
              src={profile.svg}
              alt=""
              className="w-1/6 sm:w-1/12 h-1/6 sm:h-1/12"
            />
            <div className="ml-3 w-full">
              <h3 className="text-mainColor font-semibold">{profile.name}</h3>
              <div className="text-mainColor opacity-50 text-sm flex flex-wrap justify-between">
                <div>
                  <p>United States</p>
                </div>
                <div>
                  <p>Mob : 8715674877</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalCard;
