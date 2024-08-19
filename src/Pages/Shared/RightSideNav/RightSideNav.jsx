import React from 'react'
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"
import bgImg from  "../../../assets/bg1.png"


function RightSideNav() {
  return (
    <div>
        <div className='p-4 space-y-3 mb-5'>
          <h1 className='text-3xl'>Login With</h1>
          <button className="btn btn-outline w-full justify-center">
            <FaGoogle />
            Google
          </button>
          <button className="btn btn-outline w-full justify-center">
            <FaGithub />
            Github
          </button>
        </div>
        <div className='p-4 mb-5'>
          <h1 className='text-3xl mb-3'>Find Us On</h1>
           <a target="_blank" className='flex p-4 text-lg items-center border rounded-t-lg' href="https://www.facebook.com/Saif0000001"> 
            <FaFacebook className='mr-2 text-[#3B599C]' />
            Facebook
           </a>
           <a target="_blank" className='flex p-4 text-lg items-center border-x' href="https://www.instagram.com/saif_000001/"> 
            <FaInstagram className='mr-2 text-[#D82D7E]' />
            Instagram
           </a>
           <a target="_blank" className='flex p-4 text-lg items-center border rounded-b-lg' href="https://x.com/Saif_000001"> 
            <FaTwitter className='mr-2 text-[#58A7DE]' />
            Twitter
           </a>
        </div> 
        <div className='p-4 space-y-3 mb-5 bg-slate-200'>
          <h1 className='text-3xl'>Q-Zone</h1>
           <img src={qZone1} alt="q-zone" />
           <img src={qZone2} alt="q-zone" />
           <img src={qZone3} alt="q-zone" />
        </div> 
        <div className='p-4 space-y-3 mb-5 text-white text-center' style={{backgroundImage: `url(${bgImg})`}}>
          <h2 className="text-4xl pt-3 pb-1">Create an Amazing Newspaper</h2>
          <p className='p-5'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
           <button className='btn btn-error'>Learn More</button>
        </div> 
    </div>
  )
}

export default RightSideNav
