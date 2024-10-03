import React from 'react'
import './border.css'
const Posibility = ({title,text}) => {
  return (
    <div>
      <div className="flex mb-12 justify-around h-fit w-fit">
        <div className="mr-12" ><p className=" border text-2xl font-semibold pt-4">{title}</p>
        </div>
       <div className=""> <p className="text-sky-500 ml">{text}</p>
       </div>
      </div>
    </div>
  )
}

export default Posibility
