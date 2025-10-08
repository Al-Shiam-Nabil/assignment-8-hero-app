import React from 'react';

import Banner from '../Components/Banner/Banner';
import StateSection from '../Components/StateSection/StateSection';
import useLoadData from '../Hooks/useLoadData';
import Cards from '../Components/Cards/Cards';

const Home = () => {
    const {data,error,loading}=useLoadData()
    const homePageData=(data.slice(0,8))
    return (
        <div>
       
              <Banner></Banner>
              <StateSection></StateSection>
              <Cards homePageData={homePageData}></Cards>
        
        </div>
    );
};

export default Home;