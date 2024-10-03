import React from 'react'
import './article.css'
import Articles from './Articles.jsx'
import logo1 from './../../assets/blog01.png';

const Article = () => {
  return (
    <div >
      <div className="ml-36 mt-6">
      <h1 className="text-6xl font-bold text-rectangle gradient-2 h-20">A lot is happening,</h1>
      <h1 className="text-6xl font-bold text-rectangle gradient-2 h-20">We are blogging about it.</h1>
      </div>
      <div className="flex justify-start ml-36 mt-20 w-5/6 pb-8">
        <div className="h-2/3">
        <img src={logo1} alt="logo1" />
        <div className="h-72 bg-back pb-2">
        <p className="text-md ml-2 pt-4">Sep 26, 2021</p>
        <p className="mt-4 ml-2 text-4xl font-semibold">GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
        <p  className="mt-16 text-md mb-4 ml-2">Read Full Article</p>
        </div>
        </div>
        <div className="ml-16">
           <div className=" flex">
           <Articles num="2"/>
           <Articles num="3"/>
           </div>
           <div className=" flex mt-12">
           <Articles num="4"/>
           <Articles num="5"/>
           </div>
        </div>
      </div>
    </div>
  )
}

export  default Article 
