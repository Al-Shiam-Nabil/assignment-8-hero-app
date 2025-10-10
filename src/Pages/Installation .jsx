import Container from "../Components/Container/Container";
import useLoadData from "../Hooks/useLoadData";
import { getLocalData } from "../Utilities/LocalStorage/LocalStorage";
import InstalledCard from "../Components/InstalledCard/InstalledCard";
import CardError from "./Error/CardError";
import { useContext, useState } from "react";
import { InstalledContext } from "../Layouts/Root/Root";

const Installation = () => {
  const { data, loading } = useLoadData();
  const [sortBy, setSortBy] = useState("none");
  const getId = getLocalData();
  const filteredData = data.filter((e) => getId.includes(e.id));

  const [installedApp] = useContext(InstalledContext);

  const sortedFunc = (() => {
    if (sortBy === "asc") {
      return [...filteredData].sort((a, b) => a.downloads - b.downloads);
    } else if (sortBy === "dsc") {
      return [...filteredData].sort((a, b) => b.downloads - a.downloads);
    } else {
      return filteredData;
    }
  })();

  return (
    <Container>
      <section className="text-center mt-20 mb-10 space-y-3">
        <h2 className="text-3xl sm:text-4xl font-semibold">
          Your Installed Apps
        </h2>
        <p className="text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </section>

      <section className="flex flex-col-reverse sm:flex-row gap-5 justify-between items-center mb-8">
        <h3 className="text-xl  font-semibold">
          ({filteredData.length}) Apps Found
        </h3>

        <div>
          <select
            onChange={(e) => setSortBy(e.target.value)}
            defaultValue={sortBy}
            className="select w-[250px]"
          >
            <option value="none">None</option>
            <option value="desc">High to Low</option>
            <option value="asc">Low to High</option>
          </select>
        </div>
      </section>

      {loading ? (
        <CardError></CardError>
      ) : filteredData.length === 0 ? (
        <div className="grid place-items-center my-[80px] space-y-5 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800">
            {" "}
            No Installed Apps Yet !
          </h2>
          <p className="text-gray-600">
            Please install your apps and expore better experience.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4 mb-20">
          {sortedFunc.map((install) => (
            <InstalledCard key={install.id} install={install}></InstalledCard>
          ))}
        </div>
      )}
    </Container>
  );
};

export default Installation;
