import React from 'react'
import './../containers/gradient.css'
import Posibility from './../containers/Posibility.jsx'
const Cta = () => {
  return (
    <div>
      <div className="flex ml-64 mr-16">
        <div className="h-84 w-1/2 mr-44">
           <h1 className=" text-fuchsia-400	font-semibold text-3xl">The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
           <p className="text-fuchsia-400	 mt-4">Request Early Access to Get Started</p>
        </div>
        <div className="">
          <Posibility title="Improving end distrusts instantly " text="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."/>
          <Posibility title="Become the tended active" text="Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."/>
          <Posibility title="Message or am nothing " text="Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."/>
          <Posibility title="Really boy law county " text="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."/>
        </div>
      </div>
    </div>
  )
}

export  default  Cta
