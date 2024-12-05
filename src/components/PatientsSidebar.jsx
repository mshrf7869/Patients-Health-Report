import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

const PatientsSidebar = ({ data, setIdx }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleIndex = (index) => {
    setActiveIndex(index)
    setIdx(index);
  };
  return (
    <div className="w-[250px] max-h-[810px] bg-white shadow-md mt-[20px] ml-3 rounded-[16px]">
      <div className="flex items-center justify-between px-4 my-2">
        <h2 className="text-2xl font-bold">Patients List</h2>
        <FaSearch  className="cursor-pointer"/>
      </div>
      <div className="grid grid-cols-1 max-h-[750px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {data.map((patient, index) => (
          <div className={`flex justify-between items-center cursor-pointer ${activeIndex === index ? "bg-[#D8FCF7]" : "hover:bg-gray-50"}`}>
          <div
            key={index}
            onClick={() => handleIndex(index)}
            className="p-2 flex gap-2"
          >
            <img
              src={patient.profile_picture}
              alt={patient.name}
              className=" h-10 object-cover rounded-md mb-2"
            />
            <div className="">
              <h3 className="text-lg font-semibold">{patient.name}</h3>
              <div>
                <div className="flex">
                  <p className="text-gray-600"> {patient.gender},</p>
                  <p className="text-gray-600 ml-1">{patient.age}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
             <BsThreeDots className="mb-5 mr-3"/>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientsSidebar;
