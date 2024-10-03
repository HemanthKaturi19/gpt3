import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className="text-gray-200 flex justify-evenly text-lg items-center font-normal" >
      <p className="font-bold text-3xl text-gray-200 ml-24">GPT3</p>
       <p className="ml-10">Home</p>
       <p className="ml-10">WhatisGPT?</p>
       <p className="ml-10">Open AI</p>
       <p className="ml-10">Case Studies</p>
       <p className="ml-10">Library</p>
    </div>
    <div className="flex justify-between mr-12 items-center pr-20 text-lg font-normal">
        <p>Sign in</p>
        <button className="bg-orange-700 ml-12 w-32 h-12 rounded-md ">Sign Up</button>
       </div>
    </div>
  )
}

export  default  Navbar
