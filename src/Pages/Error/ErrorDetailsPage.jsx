import React from 'react';
import { useNavigate } from 'react-router';
import errorAppsImage from "../../assets/App-Error.png"
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Container from '../../Components/Container/Container';

const ErrorDetailsPage = () => {
    const navigate=useNavigate()
    return (
       <div>
    
<Container>
   <div className='grid place-items-center mt-10 mb-20'>
     <img src={errorAppsImage} alt="error app image"  className='max-w-[300px] max-h-[300px] object-contain mb-5'/>
    <h2 className='text-3xl font-semibold'>OPPS!! APP NOT FOUND</h2>
    <p className='text-gray-500 my-2'>The App you are requesting is not found on our system.  please try another apps</p>
    <button onClick={()=>navigate(-1)} className='flex justify-center items-center gap-1 bg-linear-to-r from-[#632EE3] to-[#9F62F2] btn text-white font-semibold text-base hover:scale-105 transition ease-in-out duration-300'>Go Back!</button>
   </div>
</Container>

       </div>
    );
};

export default ErrorDetailsPage;