import React from "react";
import Container from "../../Components/Container/Container";
import errorPageImage from "../../assets/error-404.png";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Link, useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header></Header>
      <Container>
        <div className="grid place-items-center mt-10 mb-20 text-center">
          <img
            src={errorPageImage}
            alt="error page image"
            className="max-w-[300px] max-h-[300px] object-contain mb-5"
          />
          <h2 className="text-3xl font-semibold">Oops, page not found!</h2>
          <p className="text-gray-500 my-2">
            The page you are looking for is not available.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="flex justify-center items-center gap-1 bg-linear-to-r from-[#632EE3] to-[#9F62F2] btn text-white font-semibold text-base hover:scale-105 transition ease-in-out duration-300"
          >
            Go Back!
          </button>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
