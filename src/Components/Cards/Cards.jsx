import React from 'react';
import Container from '../Container/Container';
import Card from '../Card/Card';

const Cards = ({homePageData}) => {
   
    return (
      <Container>
          <div className='my-20'>
           <div className='text-center space-y-2 mb-10'>
             <h2 className='text-4xl font-bold'>Trending Apps</h2>
            <p className='text-[#627382] text-lg'>Explore All Trending Apps on the Market developed by us</p>
           </div>

           <div>
            {
                homePageData.map(singleData=><Card key={singleData.id} singleData={singleData}></Card>)
            }
           </div>
        </div>
      </Container>
    );
};

export default Cards;