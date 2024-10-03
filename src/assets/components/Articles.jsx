import logo1 from './../../assets/blog01.png';
import logo2 from './../../assets/blog02.png';
import logo3 from './../../assets/blog03.png';
import logo4 from './../../assets/blog04.png';
import logo5 from './../../assets/blog05.png';
import React from 'react'

const Articles = (props) => {
    let logo = "";

  // Create a mapping object for the logos
  const logoMap = {
    "1": logo1,
    "2": logo2,
    "3": logo3,
    "4": logo4,
    "5": logo5
  };

  // Assign the logo based on `props.num`
  logo = logoMap[props.num] || ""; 
  let imgheight='';
  let imgwidth='';
  let textheight='';
  let textWidth='';
  if(props.num==="1"){
    imgheight='44';
    imgwidth='36';
    textWidth='36';
    textheight='9';
  }
  if(props.num==="2"){
    imgheight='24';
    imgwidth='36';
    textWidth='36';
    textheight='36';

  }
  if(props.num==="3"){
    imgheight='24';
    imgwidth='36';
    textWidth='36';
    textheight='36';
  }
  if(props.num==="4"){
    imgheight='24';
    imgwidth='36';
    textWidth='36';
    textheight='36';

  }
  if(props.num==="5"){
    imgheight='24';
    imgwidth='36';
    textWidth='36';
    textheight='36';
  }
  return (
    <div className="ml-12">
      <div >
        <img src={logo} alt={`Blog ${props.num}`} className=" mb-none"
                style={{ height: imgheight, width: imgwidth }} 

/>
      </div>
      <div className="bg-back text-slte-200 pb-2" 
     style={{ width: textWidth, height: textheight }}
>
        <p className="text-xs ml-2 pt-4">Sep 26, 2021</p>
        <p className="mt-4 ml-2 font-semibold">GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
        <p  className="mt-8 text-xs  ml-2">Read Full Article</p>
      </div>
    </div>
  )
}

export default Articles
