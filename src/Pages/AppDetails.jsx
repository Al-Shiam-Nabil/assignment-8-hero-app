import React from 'react';
import AppInstallSection from '../Components/AppInstallSection/AppInstallSection';
import { useParams } from 'react-router';
import useLoadData from '../Hooks/useLoadData';

const AppDetails = () => {
    const {id}=useParams()
    const {data}=useLoadData()
    console.log(data)
    return (
        <div>
          <AppInstallSection></AppInstallSection>
        </div>
    );
};

export default AppDetails;