import React from "react";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import { Link } from "react-router";

const Card = ({ singleData }) => {
  const { id, image, title, downloads, ratingAvg } = singleData;

  let formatedDownloads = downloads;

  if (downloads >= 1000 && downloads < 1000000) {
    const newDownloads = downloads / 1000;
    formatedDownloads = newDownloads.toFixed(1) + "K";
  } else if (downloads >= 1000000) {
    const newDownloads = downloads / 1000000;
    formatedDownloads = newDownloads.toFixed(1) + "M";
  }

  return (
    <Link to={`/app-details/${id}`}>
      <div className="bg-white rounded-sm p-4 shadow space-y-2 cursor-pointer hover:scale-105  transition ease-in-out duration-300">
        <div className=" w-full rounded-lg bg-[#d9d9d9] h-[250px] lg:h-[200px] xl:h-[250px]">
          <img
            src={image}
            alt={title}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
        <h3 className="font-medium text-lg">{title}</h3>

        <div className="flex justify-between items-center ">
          <div className="badge badge-soft badge-primary font-medium py-4 text-[#00D390]">
            <img
              src={downloadIcon}
              alt="icon"
              className="w-4 h-4 object-contain"
            />
            {formatedDownloads}
          </div>

          <div className="badge badge-soft badge-primary text-[#FF8811] font-medium py-4 bg-[#FFF0E1]">
            <img
              src={ratingIcon}
              alt="icon"
              className="w-4 h-4 object-contain"
            />
            {ratingAvg}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
