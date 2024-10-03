import React from 'react'

const Rectangle = () => {
  return (
    <div className="pr-24 pl-24 mt-24 pb-12 ">
      <div className="h-40 w-full bg-rectangle pl-24 rounded-2xl flex justify-between items-center">
        <div className="mb-8">
        <p className="text-black">Request Early Access to Get Started</p>
        <p className="text-black mt-4 font-semibold text-2xl">Register today & start exploring the endless possiblities.</p>
        </div>
        <button className=" text-slate-200 bg-black w-40 h-16 mb-2 mr-12 rounded-full">Get Started</button>
      </div>
    </div>
  )
}

export default Rectangle
