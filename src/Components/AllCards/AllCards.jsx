import React from 'react';
import Card from '../Card/Card';
import CardError from '../../Pages/Error/CardError';

const AllCards = ({data,loading}) => {
    return (
  <>
  {loading ? <CardError></CardError> :  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
           {
            data.map(singleData=><Card key={singleData.id} singleData={singleData}></Card>)
           }
        </div>}
  </>
    );
};

export default AllCards;