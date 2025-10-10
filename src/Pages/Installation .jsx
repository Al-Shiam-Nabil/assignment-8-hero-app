import React, { useEffect, useState } from "react";
import Container from "../Components/Container/Container";
import useLoadData from "../Hooks/useLoadData";
import { getLocalData } from "../Utilities/LocalStorage/LocalStorage";
import InstalledCard from "../Components/InstalledCard/InstalledCard";
import CardError from "./Error/CardError";

const Installation = () => {
    const {data,loading}=useLoadData()
    const getId=getLocalData();
    const filteredData=data.filter(e=>getId.includes(e.id))
   

    

  return (
   <Container>
    <section className="text-center mt-20 mb-10 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-semibold">Your Installed Apps</h2>
          <p className="text-gray-500">
           Explore All Trending Apps on the Market developed by us
          </p>
        </section>

         <section className="flex justify-between items-center mb-8">
          <h3 className="text-xl  font-semibold">
            ({filteredData.length}) Apps Found
          </h3>

          <div>
            sort
          </div>
        </section>

{
    loading ? <CardError></CardError> : <div className="flex flex-col gap-4 mb-20">
    {
    filteredData.map(install=><InstalledCard key={install.id} install={install} setUnInstall={setUnInstall}></InstalledCard>)
}
</div>
}
   </Container>
  );
};

export default Installation;


/*
{
    "image": "https://i.ibb.co.com/d4n2b3th/maik-winnecke-bqwi-Eesse4-U-unsplash.jpg",
    "title": "SocialVerse",
    "companyName": "NovaTech Studios",
    "id": 101,
    "description": "SocialVerse is a cutting-edge social media platform designed for creators, influencers, and everyday users who want to connect beyond the surface. With its modern design and interactive tools, users can share their stories, host live sessions, and collaborate on projects seamlessly.\n\nBuilt with AI-driven feed algorithms, SocialVerse ensures that your content reaches the right audience. From in-depth analytics to smart recommendations, it’s a perfect space to grow your digital identity and build meaningful communities.",
    "size": 125,
    "reviews": 15234,
    "ratingAvg": 4.4,
    "downloads": "1.2M",
    "ratings": [
        {
            "name": "1 star",
            "count": 820
        },
        {
            "name": "2 star",
            "count": 960
        },
        {
            "name": "3 star",
            "count": 1400
        },
        {
            "name": "4 star",
            "count": 4200
        },
        {
            "name": "5 star",
            "count": 8854
        }
    ]
}

*/
