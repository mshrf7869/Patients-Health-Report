import React, { useState } from 'react'
import PatientsSidebar from './PatientsSidebar'
import Graph from './Graph'
import UserDetails from './UserDetails'



const Dashboard = ({data}) => {
    const [idx,setIdx]=useState(0);
    
    console.log("index",idx)
  return (
    <div className='flex bg-[#F6F7F8]'>
      <PatientsSidebar data={data} setIdx={setIdx}/>
      <Graph data={data} index={idx}/>
      <UserDetails Mdata={data} index={idx}/>
    </div>
  )
}

export default Dashboard
