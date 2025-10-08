import React, { useState } from "react";
import Container from "../Components/Container/Container";
import Search from "../Components/Search/Search";
import AllCards from "../Components/AllCards/AllCards";
import useLoadData from "../Hooks/useLoadData";

const AllApps = () => {
  const { data, error, loading,setLoading } = useLoadData();
  const [searchData, setSearchData] = useState([]);

  return (
    <Container>
      <div>
        <section className="text-center mt-20 mb-10 space-y-3">
          <h2 className="text-4xl font-semibold">Our All Applications</h2>
          <p className="text-gray-500">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </section>

        <section className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-semibold">
            ({searchData.length}) Apps Found
          </h3>

          <div>
            <Search data={data} setSearchData={setSearchData} setLoading={setLoading}></Search>
          </div>
        </section>

        <AllCards data={searchData} loading={loading}></AllCards>
      </div>
    </Container>
  );
};

export default AllApps;
