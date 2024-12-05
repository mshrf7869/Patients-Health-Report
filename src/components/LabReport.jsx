import React from 'react'
import { IoMdDownload } from "react-icons/io";


const LabReport = ({data,index}) => {
    const results=data[index].lab_results
    console.log("redult",results)
    return (
        <div className="flex justify-center  w-[250px] ml-6 mt-4 items-center bg-gray-100">
          <div className="w-80 bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Lab Results</h2>
            <div className="space-y-2 overflow-y-auto max-h-56 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              {results.map((result, ind) => (
                <div
                  key={ind}
                  className="flex justify-between hover:bg-gray-50 rounded cursor-pointer"
                >{result}
                <IoMdDownload className='mr-5'/>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };

export default LabReport
