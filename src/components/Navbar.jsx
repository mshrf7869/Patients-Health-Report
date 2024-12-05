import logo from '../../public/images/TestLogo@2x.png'
import { GoHome } from "react-icons/go";
import { MdOutlineGroup } from "react-icons/md";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { FiMessageSquare } from "react-icons/fi";
import { MdCreditCard } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import doctor from "../../public/images/doctor.png"

function NavBar() {
    
  return (
    <nav className="bg-white  h-[72px] rounded-[35px]">
      <div className="container mx-auto px-1 py-3 flex items-center justify-between">
        <img src={logo} alt="Tech Care Logo" className="h-8 mr-4 cursor-pointer"/>
        <div className="flex space-x-3">
          <a href="/" className="text-gray-600 hover:bg-[#01F0D0] w-[121.73px] h-[41px] rounded-[30px] flex font-semibold items-center">
          <GoHome className="h-[17px] w-[21.53px]"/>
            <span className="ml-2 text-[17px]">Overview</span>
          </a>
          <a href="/" className="text-gray-600 bg-[#01F0D0] w-[121.73px] h-[41px] rounded-[30px] flex font-semibold items-center">
            <div className="relative flex items-center ml-2">
            <MdOutlineGroup className="h-[17px] w-[21.53px]"/>
              <span className="ml-2 text-[17px]">Patients</span>
            </div>
          </a>
          <a href="/" className="text-gray-600 hover:bg-[#01F0D0] w-[121.73px] h-[41px] rounded-[30px] flex font-semibold items-center">
          <RiCalendarScheduleLine className="h-[17px] w-[21.53px]" />
            <span className="ml-2 text-[17px]">Schedule</span>
          </a>
          <a href="/" className="text-gray-600 hover:bg-[#01F0D0] w-[121.73px] h-[41px] rounded-[30px] flex font-semibold items-center">
          <FiMessageSquare className="h-[17px] w-[21.53px]" />
            <span className="ml-2 text-[17px]">Message</span>
          </a>
          <a href="/" className="text-gray-600 hover:bg-[#01F0D0] w-[121.73px] h-[41px] rounded-[30px] flex font-semibold items-center">
          <MdCreditCard className="h-[17px] w-[21.53px]" />
            <span className="ml-2 text-[17px]">Transactions</span>
          </a>
        </div>
        <div className="flex items-center cursor-pointer">
          <div className='flex space-x-3 items-center '>
            <img src={doctor} alt="doctor" className='w-10 h-10 ml-6'/>
          <span className="text-gray-800 mr-2 font-semibold">Dr. Jose Simmons</span>
          </div>
          
          <div className="relative">
            <div className="focus:outline-none flex gap-1">
            <IoSettingsOutline />
            <BsThreeDotsVertical />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );

}

export default NavBar;