import React from 'react'
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { TbGenderFemme } from "react-icons/tb";
import { MdWifiCalling3 } from "react-icons/md";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import LabReport from './LabReport'


const UserDetails = ({Mdata,index}) => {
    const data=Mdata[index];
    return (
        <div>
          <div className="flex justify-center items-center w-[300px] h-screen mt-5 bg-gray-100">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-col items-center">
              <img
                src={data.profile_picture}
                alt="Profile"
                className="w-24 h-24 rounded-full mb-1"
              />
              <h1 className="text-xl font-semibold text-gray-800">{data.name}</h1>
            </div>
            <div className="mt-4 space-y-1">
              <div className="flex items-center text-gray-600">
              <HiOutlineCalendarDateRange className="size-6 mr-3"/>
                <div>
                <h2>Date of birth</h2>
                <span className='font-semibold'>
                   {data.date_of_birth}
                </span>
                </div>
              </div>
              <div className="flex items-center text-gray-600">
              <TbGenderFemme className="size-6 mr-3" />
                <div>
                    <h2>Gender</h2>
                <span className='font-semibold'>
                  {data.gender}
                </span>
                </div>
              </div>
              <div className="flex items-center text-gray-600">
              <MdWifiCalling3 className="size-6 mr-3" />
              <div>
                <h2>Contact info</h2>
              <span className='font-semibold'>
                  {data.phone_number}
                </span>
              </div>
              </div>
              <div className="flex items-center text-gray-600">
              <MdWifiCalling3 className="size-6 mr-3" />
                <div>
                    <h2>Emergency contact</h2>
                <span className='font-semibold'>
                   {data.emergency_contact}
                </span>
                </div>
              </div>
              <div className="flex items-center text-gray-600">
              <IoShieldCheckmarkOutline className="size-6 mr-3" />
               <div>
                <h2>
                Insurance provider
                </h2>
               <span className='font-semibold'>
                   {data.insurance_type}
                </span>
               </div>
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-500">
                Show All Information
              </button>
            </div>
          </div>
        </div>
        <LabReport data={Mdata} index={index}/>
        </div>
      );
    };

export default UserDetails
