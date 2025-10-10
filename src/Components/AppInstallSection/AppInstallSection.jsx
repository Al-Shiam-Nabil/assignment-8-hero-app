import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png";

import { InstalledContext } from "../../Layouts/Root/Root";
import { useContext } from "react";

const AppInstallSection = ({
  findData,
  installed,
  setInstalled,
  setLocalData,
}) => {
  const [installedApp, setInstalledApp] = useContext(InstalledContext);

  if (!findData) {
    return null;
  }
  const { image, title, companyName, reviews, ratingAvg, downloads, size, id } =
    findData;

  const handleInstall = (id) => {
    setInstalled(true);

    setLocalData(id);
    setInstalledApp([...installedApp, id]);
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
    <div className="flex flex-col justify-center items-center md:items-start md:justify-start md:flex-row gap-8 w-full border-b-2 border-gray-200 pb-8 mt-20 mb-10">
      <div className=" md:h-[280px] md:w-[280px] h-[250px] w-[250px]">
        <img
          src={image}
          alt={title}
          className="h-full w-full bg-white object-cover"
        />
      </div>
      <div className="flex-1 w-full md:h-[280px]  flex flex-col items-center md:items-start  md:justify-between">
        <div className="border-b-2 border-gray-200 space-y-2 pb-4 text-center w-full md:text-left">
          <h2 className="text-2xl sm:text-3xl  font-semibold">{title}</h2>
          <p className="text-gray-500">
            Developed by{" "}
            <span className="text-[#632EE3] font-medium">{companyName}</span>
          </p>
        </div>

        <div className="grid sm:grid-cols-3 grid-cols-1 gap-10 md:gap-5 lg:gap-10 text-center md:text-left py-8 md:py-0">
          <div className="space-y-2">
            <img
              src={downloadIcon}
              alt="icon"
              className="w-7 h-7 object-contain mx-auto md:mx-0"
            />
            <p className="text-gray-500">Downloads</p>
            <h3 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl  text-gray-700 font-bold">
              {formatedDownloads}
            </h3>
          </div>

          <div className="space-y-2">
            <img
              src={ratingIcon}
              alt="icon"
              className="w-7 h-7 object-contain mx-auto md:mx-0"
            />
            <p className="text-gray-500">Average Ratings</p>
            <h3 className="text-3xl md:text-2xl lg:text-3xl text-gray-700 font-bold">
              {ratingAvg}
            </h3>
          </div>

          <div className="space-y-2">
            <img
              src={reviewIcon}
              alt="icon"
              className="w-7 h-7 object-contain mx-auto md:mx-0"
            />
            <p className="text-gray-500">Total Reviews</p>
            <h3 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl  text-gray-700 font-bold">
              {reviews}
            </h3>
          </div>
        </div>

        <button
          onClick={() => handleInstall(id)}
          disabled={installed}
          className={` btn btn-primary max-w-[200px] bg-[#00D390] border-none shadow-none text-white hover:bg-[#632EE3]`}
        >
          {installed ? "Installed" : `Install Now (${size} MB)`}
        </button>
      </div>
    </div>
  );
};

export default AppInstallSection;
