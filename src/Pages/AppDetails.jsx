import React, { useState } from "react";
import AppInstallSection from "../Components/AppInstallSection/AppInstallSection";
import { useParams } from "react-router";
import useLoadData from "../Hooks/useLoadData";
import Container from "../Components/Container/Container";
import Rechart from "../Components/Rechart/Rechart";
import CardError from "./Error/CardError";
import ErrorDetailsPage from "./Error/ErrorDetailsPage";
import { setLocalData } from "../Utilities/LocalStorage/LocalStorage";

const AppDetails = () => {
    const [installed,setInstalled]=useState(false)
  const { id } = useParams();
  const idNum = Number(id);
  const { data,loading } = useLoadData();

  if(loading){
    return <CardError></CardError>
  }

  const findData = data.find((e) => e.id === idNum);


    if(!findData){
    return <ErrorDetailsPage></ErrorDetailsPage>
  }


  

  return (
    <div>
      <Container>
        <AppInstallSection installed={installed} setInstalled={setInstalled} findData={findData} setLocalData={setLocalData}></AppInstallSection>
        <Rechart findData={findData}></Rechart>

        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-5">Description</h3>
          <p className="text-gray-500"> {findData.description}</p>
        </div>
      </Container>
    </div>
  );
};

export default AppDetails;

