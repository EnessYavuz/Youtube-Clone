import moment from "moment/moment";
import React from "react";
import ReactPlayer from "react-player";
import icons from '../assets/icons'

function DetailCard({ video }) {
  return (
    <div className="max-w-[650px] m-10 mx-20 my-10">
      <ReactPlayer url={`https://www.youtube.com/watch?v=${video?.id}`} />
      <div className="font-bold text-xl">{video?.snippet?.title}</div>
      <div className="space-x-2 text-gray-800">
        <span>{video?.statistics?.viewCount} Görüntülenme</span>
        <span>
          {moment(video?.snippet?.publishedAt).startOf("day").fromNow()}
        </span>
      </div>
      <div className="text-gray-700 mt-2 text-sm">
        {(video?.snippet?.description).substring(0, 200)}...
      </div>

      <div className="mt-2 text-xs text-blue-600 cursor-pointer  flex flex-wrap">
        {video?.snippet?.tags?.map((tag, i) => <div className=" hover:text-cyan-600">{`#${tag}`}</div>)}
      </div>
      <div className="align-items gap-4 ">
        <span className="align-items gap-1"><icons.like className="icon-style"/>{video?.statistics?.likeCount}</span>
        <span className="align-items gap-1"><icons.dislike className="icon-style"/> Görüntülenme</span>
      </div>
    </div>
  );
}

export default DetailCard;
