import React, { useState } from "react";
import Container from "../Components/Container/Container";

import AllCards from "../Components/AllCards/AllCards";
import useLoadData from "../Hooks/useLoadData";
import CardError from "./Error/CardError";
import NoAppsFound from "./Error/NoAppsFound";

const AllApps = () => {
  const { data, error, setError, loading, setLoading } = useLoadData();

  const [inputField, setInputField] = useState("");

  const trim = inputField.trim().toLowerCase();

   const filteredData = trim
    ? data.filter((e) => e.title.trim().toLowerCase().includes(trim))
    : data;






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
            ({filteredData.length}) Apps Found
          </h3>

          <div>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                name="search"
                value={inputField}
                onChange={(e) => setInputField(e.target.value)}
                required
                placeholder="Search Apps"
                spellCheck="false"
              />
            </label>
          </div>
        </section>

     

     {loading ? (
          <CardError></CardError>
        ) : filteredData.length === 0 ? (
          <NoAppsFound setInputField={setInputField} ></NoAppsFound>
        ) : (
          <AllCards data={filteredData} loading={loading}></AllCards>
        )}
      </div>
    </Container>
  );
};

export default AllApps;
