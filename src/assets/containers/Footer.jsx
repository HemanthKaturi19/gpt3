import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className="bg-back mt-36">
      <div className="flex justify-center pt-24">
        <div>
            <h1 className="gradient-3 text-5xl font-bold h-16">Do you want to step in to the</h1>
            <h1 className="gradient-3 text-center text-5xl font-bold h-12">future before others</h1>
            <div className="mt-16 text-center border-white border-solid border-2 w-44 ml-64 h-8"><button>Requast Early Access</button></div>
        </div>
      </div>
      <div className="flex justify-around mt-24 pb-24">
             <div>
                <h1 className="text-2xl font-bold">GPT-3</h1>
                <p className="mt-8">Crechterwoord k12 182 DK</p>
                <p className="mt-8">Alknjkcb,All Rights Reserved</p>
             </div>
             <div>
                <p className="font-bold">Links</p>
                <p className="mt-8">Overons</p>
                <p className="mt-8">Social Media</p>
                <p className="mt-8">counters</p>
                <p className="mt-8">contact</p>
             </div>
             <div>
                <p className="font-bold">company</p>
                <p className="mt-8">Terms & conditions</p>
                <p className="mt-8">Privacy policy</p>
                <p className="mt-8">Contact</p>
             </div>
             <div>
                <p className="font-bold">Get in touch</p>
                <p className="mt-8">Crechterwoord k12</p>
                <p className="mt-8">085-132567</p>
                <p className="mt-8">info@payme.nets</p>
             </div>
        </div>
    </div>
  )
}

export default Footer
