import React, { useContext } from "react";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import Swal from "sweetalert2";

import { removeLocalData } from "../../Utilities/LocalStorage/LocalStorage";
import { InstalledContext } from "../../Layouts/Root/Root";
import useLoadData from "../../Hooks/useLoadData";

import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const InstalledCard = ({ install }) => {
  const { image, title, downloads, ratingAvg, size, id } = install;
  const { data } = useLoadData();

  const [installedApp, setInstalledApp] = useContext(InstalledContext);

  const filteredInstalled = data.filter((e) => installedApp.includes(e.id));

  const handleUninstall = (e) => {
    const unInstalledFilter = filteredInstalled.filter((elem) => elem.id !== e);
    setInstalledApp([...unInstalledFilter]);

    removeLocalData(e);
    MySwal.fire(`${title} - successfully Uninstalled.`);
  };

  let formatedDownloads = downloads;

  if (downloads >= 1000 && downloads < 1000000) {
    const newDownloads = downloads / 1000;
    formatedDownloads = newDownloads.toFixed(1) + "K";
  } else if (downloads >= 1000000) {
    const newDownloads = downloads / 1000000;
    formatedDownloads = newDownloads.toFixed(1) + "M";
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
              <img
                src={downloadIcon}
                alt="icon"
                className="w-4 h-4 object-contain"
              />
              <p className="text-[#00D390]">{formatedDownloads}</p>
            </div>

            <div className="flex justify-center items-center gap-2">
              <img
                src={ratingIcon}
                alt="icon"
                className="w-4 h-4 object-contain"
              />
              <p className="text-[#FF8811]">{ratingAvg}</p>
            </div>

            <p className="text-gray-400">{size} MB</p>
          </div>
        </div>
      </div>

      <button
        onClick={() => handleUninstall(id)}
        className={` btn btn-primary max-w-[200px] bg-[#00D390] border-none shadow-none text-white hover:bg-[#632EE3] `}
      >
        Uninstall
      </button>
    </section>
  );
};

export default InstalledCard;
