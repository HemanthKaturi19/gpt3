import React from 'react';
import  './border.css';
import './gradient.css';
import Features from './../components/Feature.jsx';

const WhatGpt3 = () => {
  return (
    <div className="flex justify-center mt-32 ">
        <div className="h-lvh w-2/3 bg-box mb-32">
        <div className=" flex justify-around mt-24">
        <p className="border font-semibold text-3xl w-2/3 ml-16 mr-24 pt-4">What is GPT-3</p>
        <p className="mr-12 text-1xl text-sky-300">We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
        </div>
         <div className="mt-24 flex  items-center h-16">
          <h1 className="gradient text-3xl font-semibold ml-16 mr-24 width-1/2">The possibilities are beyond your imagination</h1>
          <p className="gradient text-2xl ml-8 mr-8 w-44">Explore the Library</p>
         </div>
         <div className="flex justify-around mt-28">
          <Features title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."/>
          <Features title="Knowledge" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
          <Features title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
         </div>
        </div>
      </div>
    )
    
}

export default WhatGpt3
