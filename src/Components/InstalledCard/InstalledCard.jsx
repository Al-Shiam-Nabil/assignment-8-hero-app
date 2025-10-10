import React from "react";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";

import { removeLocalData } from "../../Utilities/LocalStorage/LocalStorage";

const InstalledCard = ({ install,setUnInstall }) => {
  const { image, title, downloads, ratingAvg, size, id } = install;


  const handleUninstall=(e)=>{

removeLocalData(e)
  }

  return (
   
      <section className="flex flex-col sm:flex-row justify-center items-start  sm:justify-between sm:items-center bg-white p-3 sm:p-4 rounded-sm gap-3">
        <div className="flex justify-center items-center gap-3 sm:gap-5">
          <div>
            <img
              src={image}
              alt={title}
              className="sm:w-[80px] w-[60px] h-[60px] sm:h-[80px] object-cover bg-[#d9d9d9] rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">{title}</h3>
            <div className="flex justify-center items-center text-sm sm:text-base gap-3 sm:gap-8">
              <div className="flex justify-center items-center gap-2">
                <img src={downloadIcon} alt="icon" className="w-4 h-4 object-contain"/>
                <p className="text-[#00D390]">{downloads}</p>
              </div>

              <div className="flex justify-center items-center gap-2">
                <img src={ratingIcon} alt="icon" className="w-4 h-4 object-contain"/>
                <p className="text-[#FF8811]">{ratingAvg}</p>
              </div>

              <p className="text-gray-400">{size} MB</p>
            </div>
          </div>
        
        </div>

          <button onClick={()=>handleUninstall(id)}
            className={` btn btn-primary max-w-[200px] bg-[#00D390] border-none shadow-none text-white hover:bg-[#632EE3] `}
          >
            Uninstall
          </button>
      </section>
   
  );
};

export default InstalledCard;
