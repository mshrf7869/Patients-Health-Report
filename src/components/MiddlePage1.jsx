import React from "react";
import HeartBPM from "../../public/images/HeartBPM.svg";
import temperature from "../../public/images/temperature.svg";
import respiratory from "../../public/images/respiratory rate.svg";

const MiddlePage1 = () => {
  return (
    <div className="flex justify-center items-center space-x-6 mt-5">
      <div className="w-40 h-40 bg-blue-100 rounded-lg shadow-md flex flex-col justify-start items-start p-4">
        <img src={HeartBPM} alt="img" className="size-16" />
        <div className="text-blue-600  font-bold">Respiratory Rate</div>
        <div className="font-semibold mt-1">20 bpm</div>
        <div className="text-green-600 text-sm">Normal</div>
      </div>

      <div className="w-40 h-40 bg-pink-100 rounded-lg shadow-md flex flex-col justify-center items-center p-4">
        <img src={temperature} alt="" className="size-16" />
        <div className="text-pink-600 font-bold">Temperature</div>
        <div className="font-semibold mt-1">98.6°F</div>
        <div className="text-green-600 text-sm">Normal</div>
      </div>

      <div className="w-40 h-40 bg-red-100 rounded-lg shadow-md flex flex-col justify-center items-center p-4">
        <img src={respiratory} alt="" className="size-16" />
        <div className="text-red-600 font-bold">Heart Rate</div>
        <div className="font-semibold mt-1">78 bpm</div>
        <div className="text-yellow-600 text-sm">Lower than Average</div>
      </div>
    </div>
  );
};

export default MiddlePage1;
