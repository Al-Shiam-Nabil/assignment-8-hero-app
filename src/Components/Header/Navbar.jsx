import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import "./Nav.css";
import { IoLogoGithub } from "react-icons/io";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="hover:text-[#632EE3]">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="hover:text-[#632EE3]">
        <NavLink to="/all-apps">Apps</NavLink>
      </li>
      <li className="hover:text-[#632EE3]">
        <NavLink to="/installedApps">Installation</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm ">
      <div className="navbar max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="mr-4 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#632EE3"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-medium text-base"
            >
              {navLinks}
            </ul>
          </div>
          <Link
            to="/"
            className="text-[#632EE3] text-lg font-bold flex justify-center items-center gap-1"
          >
            <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />{" "}
            HERO.IO
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" flex justify-center items-center gap-8  px-1 navLinkStyle font-medium text-base">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="https://github.com/Al-Shiam-Nabil" target="_blank">
            <button className="flex justify-center items-center gap-1 bg-linear-to-r from-[#632EE3] to-[#9F62F2] btn text-white font-semibold text-base hover:scale-105 transition ease-in-out duration-300">
              <IoLogoGithub className="text-white text-xl"></IoLogoGithub>{" "}
              Contribute
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
