import React from 'react';
import AppInstallSection from '../Components/AppInstallSection/AppInstallSection';
import { useParams } from 'react-router';
import useLoadData from '../Hooks/useLoadData';
import Container from '../Components/Container/Container';
import Rechart from '../Components/Rechart/Rechart';

const AppDetails = () => {
    const {id}=useParams()
    const idNum=Number(id)
    const {data}=useLoadData()
   const findData=data.find(e=>e.id===idNum)
   
   
console.log(findData)
   
    return (
        <div>
         <Container>
             <AppInstallSection findData={findData}></AppInstallSection>
             <Rechart></Rechart>
         </Container>
        </div>
    );
};

export default AppDetails;


/*
{
    "image": "https://i.ibb.co.com/d4n2b3th/maik-winnecke-bqwi-Eesse4-U-unsplash.jpg",
    "title": "SocialVerse",
    "companyName": "NovaTech Studios",
    "id": 101,
    "description": "SocialVerse is a cutting-edge social media platform designed for creators, influencers, and everyday users who want to connect beyond the surface. With its modern design and interactive tools, users can share their stories, host live sessions, and collaborate on projects seamlessly.\n\nBuilt with AI-driven feed algorithms, SocialVerse ensures that your content reaches the right audience. From in-depth analytics to smart recommendations, it’s a perfect space to grow your digital identity and build meaningful communities.",
    "size": 125,
    "reviews": 15234,
    "ratingAvg": 4.4,
    "downloads": "1.2M",
    "ratings": [
        {
            "name": "1 star",
            "count": 820
        },
        {
            "name": "2 star",
            "count": 960
        },
        {
            "name": "3 star",
            "count": 1400
        },
        {
            "name": "4 star",
            "count": 4200
        },
        {
            "name": "5 star",
            "count": 8854
        }
    ]
}
*/