import React from "react";
import PlayIcon from "../../../images/Card/play.svg";
import "../../../index.css";

const VideoCard = () => {
  return (
    <div className="p-2 lg:p-3 w-full md:w-1/3 md:h-1/2">
      <div className="bg-white px-4 pt-1 pb-10 rounded-lg">
        <div className="mt-3 flex justify-between">
          <h3 className="text-lg text-mainColor mb-6">Product Video</h3>
        </div>
        <div className="wrapper">
          <img
            id="video-cover"
            src="https://i.ytimg.com/vi/Oy6hk6Y7VHQ/maxresdefault.jpg"
            alt="Video title"
            className="w-full"
          />

          {/* <iframe
            id="player"
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/d7lCZ0rpH3o"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Video title"
          ></iframe> */}

          <button
            id="play"
            className="play-btn"
            onClick={() => {
              window.location.assign(
                "https://www.youtube.com/watch?v=Oy6hk6Y7VHQ"
              );
            }}
          >
            <div className="p-3 bg-white rounded-full shadow-2xl">
              <img src={PlayIcon} width="20" alt="Play" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
