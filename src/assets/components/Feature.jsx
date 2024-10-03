import React from 'react';
import './../containers/border.css'
const Feature = ({title,text}) => {
  return (
    <div className="ml-16">
      <h1 className="border text-2xl pt-4">{title}</h1>
      <p className="mt-16 text-sky-300">{text}</p>
    </div>
  )
}

export  default  Feature
