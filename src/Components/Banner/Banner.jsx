import React from "react";
import { Link } from "react-router";
import playStoreIcon from "../../assets/playstore-icon.png"
import appStoreIcon from "../../assets/app-store-icon.png"
import Container from "../Container/Container";


const Banner = () => {
  return (

<Container>
         <div className="text-center space-y-6 mt-16 mb-10">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
        We Build <br />
        <span className="text-[#632EE3]">Productive</span> Apps
      </h1>
      <p className="text-[#627382] sm:text-xl max-w-[1100px] mx-auto">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

      <div className="flex justify-center items-center gap-4 flex-wrap">
    <Link to="https://play.google.com/store/apps?hl=en" target="_blank"><button className="flex justify-center items-center gap-2 btn btn-neutral btn-outline hover:shadow-none py-5 border-gray-300 text-lg font-semibold w-[180px]"><img src={playStoreIcon} alt="play store icon" className="w-7 h-7 object-contain" />Google Play</button></Link>

    <Link to="https://www.apple.com/app-store/" target="_blank"><button className="flex justify-center items-center gap-2 btn btn-neutral btn-outline hover:shadow-none py-5 border-gray-300 text-lg font-semibold w-[180px]"><img src={appStoreIcon} alt="app store icon" className="w-6 h-6 object-contain" />App Store</button></Link>
      </div>
    </div>
</Container>


  );
};

export default Banner;
