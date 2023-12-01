import moment from "moment";
import React from "react";
//import images from '../assets/images/images'

function SearchCard({ search }) {
  return (
    <div onClick={() => (window.location = `/videos/${search?.id?.videoId}`)} className="flex space-x-2 justify-center m-7 cursor-pointer">
      <img
        className=" h-48 w-72 object-contain rounded-3xl"
        src={search?.snippet?.thumbnails?.high?.url}
        alt="img"
      />
      <div className="w-2/3">
        <div className="font-bold text-lg"> {search?.snippet?.title}</div>
        <div className="flex items-center space-x-3 text-xs text-gray-600">
          <span>2,3 B görüntüleme</span>
          <span>
            {moment(search?.snippet?.publishedAt).startOf("day").fromNow()}
          </span>
        </div>
        <div>
          <div className="w-10 h-10 rounded-full bg-gray-400"></div>
          <div className="text-gray-700">Besiktas</div>
        </div>
        <div>
          {search?.snippet?.description
            ? (search?.snippet?.description).substring(0, 370)
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, nulla? Omnis"}
        </div>
      </div>
    </div>
  );
}

export default SearchCard;
