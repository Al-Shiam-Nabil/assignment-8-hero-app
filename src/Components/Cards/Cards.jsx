import React from "react";
import Container from "../Container/Container";
import Card from "../Card/Card";
import CardError from "../../Pages/Error/CardError";
import { Link } from "react-router";

const Cards = ({ homePageData, loading }) => {
  return (
    <Container>
      <div className="my-20">
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-4xl font-bold">Trending Apps</h2>
          <p className="text-[#627382] text-lg">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {loading ? (
          <CardError></CardError>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {homePageData.map((singleData) => (
              <Card key={singleData.id} singleData={singleData}></Card>
            ))}
          </div>
        )}

        {loading || (
          <div className="grid place-items-center my-10">
            <Link to="/all-apps">
              <button className="flex justify-center items-center gap-1 bg-linear-to-r from-[#632EE3] to-[#9F62F2] btn text-white font-semibold text-base hover:scale-105 transition ease-in-out duration-300">
                Show All
              </button>
            </Link>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Cards;
