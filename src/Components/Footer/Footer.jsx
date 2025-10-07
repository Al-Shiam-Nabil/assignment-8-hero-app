

import { FaSquareXTwitter } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Container from "../Container/Container";

const Footer = () => {
  return (
    <footer className="bg-[#001931] pt-[80px] text-white">
     <Container>
           <div className=" text-sm grid grid-cols-1 md:grid-cols-4 lg:grid-cols-11 gap-8 md:gap-2 pb-[50px] border-b border-gray-800">
          <div className="col-span-full lg:col-span-3 space-y-3 text-left mb-0 md:mb-7 lg:mb-0 lg:pr-[60px]">
            <h3 className="text-white text-xl font-bold">HERO.IO - Apps</h3>
            <p>
              An app, short for application, is a software program designed to perform a specific task, such as word processing, browsing the internet, or managing photos. Apps can run on various devices, including smartphones, tablets, and computers. 
            </p>
          </div>

          <div className="space-y-3  md:col-span-1 lg:col-span-2">
            <h3 className="text-white text-lg font-medium">Company</h3>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Contact Saled</li>
            </ul>
          </div>

          <div className="space-y-3 md:col-span-1 lg:col-span-2">
            <h3 className="text-white text-lg font-medium">Services</h3>
            <ul className="space-y-2">
              <li>Products & Services</li>
              <li>Customer Stories</li>
              <li>Download Apps</li>
            </ul>
          </div>

          <div className="space-y-3 md:col-span-1 lg:col-span-2">
            <h3 className="text-white text-lg font-medium">Information</h3>
            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Join Us</li>
            </ul>
          </div>

          <div className=" space-y-3 md:col-span-1 lg:col-span-2">
            <h3 className="text-white text-lg font-medium">Social Links</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaSquareXTwitter /> Twitter
              </li>
              <li className="flex items-center gap-2">
                <ImLinkedin />LinkeDin
              </li>
              <li className="flex items-center gap-2">
                <FaFacebookSquare /> Facebook
              </li>
              <li className="flex items-center gap-2">
                <MdEmail />
                hero.io@.gmail.com
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center text-sm py-7">
          © 2025 HERO.IO - All rights reserved.
        </p>
     </Container>
    </footer>
  );
};

export default Footer;