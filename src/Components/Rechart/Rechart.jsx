import React from "react";
import {
  Bar,
  BarChart,

  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CardError from "../../Pages/Error/CardError";

const Rechart = ({ findData }) => {
  if (!findData) {
    return <CardError></CardError>;
  }
  const { ratings } = findData;

const newRatings=[...ratings].reverse()


  return (
    
 <div className="border-b-2 border-gray-200 pb-10 mb-10">
<h2 className="text-xl font-semibold mb-5">Ratings</h2>
     <div className="h-[350px] w-full">

    
     <ResponsiveContainer width="100%" height="100%">
      <BarChart
      layout="vertical"
        width={500}
        height={300}
        data={newRatings}
      
      >
       
        <XAxis type="number"/>
        <YAxis dataKey="name" type="category"/>
        <Tooltip />
      
        <Bar dataKey="count" fill="#FF8811" />
      </BarChart>
    </ResponsiveContainer>
  </div>
 </div>
  );
};

export default Rechart;
