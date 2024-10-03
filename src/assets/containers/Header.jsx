import React from 'react';
import './gradient.css'
import logo from './../../assets/ai.png';
import people from './../../assets/people.png'
const Header = () => {
  return (
    <>
    <div className="flex items-center justify-evenly">
      <div className="ml-24  mt-32 w-lvw">
     <h1 className="gradient text-7xl font-semibold  text-left">Let's Build Something 
       amazing with GPT-3 
     OpenAI</h1>
    <p className=" mt-12 text-sky-200	text-2xl font-normal ml-2">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</p>
    <p className="text-sky-200	text-2xl font-normal ml-2">Party we years to order allow asked of.</p>
    <div classNmae="w-full flex">
    <input type="text" placeholder='Your Email Address' className=" rounded-l-md outline-none text-gray-200 bg-blue-900 ml-2 mt-12 h-16 w-72 placeholder-blue-500 pl-12 pr-12 w-2/3 placeholderTextSize" />
      <button className="bg-orange-700 h-16 w-36 rounded-r-md font-semibold text-1xl ">Get Started</button>
      </div>
      <div className="flex ml-2 items-center mt-16">
      <img src={people} alt="people" />
      <p className="ml-2 text-sky-200">1,600 people requested access a visit in last 24 hours</p>
           </div>
      </div>
      <div className="w-lvh ">
        <img src={logo} alt="logo" className="h-lvh w-lvw"/>
      </div>
    </div>
   </>
  )
}

export default Header
