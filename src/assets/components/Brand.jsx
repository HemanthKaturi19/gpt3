import React from 'react';
import google from './../../assets/google.png';
import slack from './../../assets/slack.png';
import atlassian from './../../assets/atlassian.png';
import dropbox from './../../assets/dropbox.png';
import shopify from './../../assets/shopify.png'

const Brand = () => {
  return (
    <div className="flex  mt-32 ml-96">
      <img src={google} alt="google " className="ml-4" />
      <img src={slack} alt="slack" className="ml-16" />
      <img src={atlassian} alt="atlassian" className="ml-16"/>
      <img src={dropbox} alt="dropbox" className="ml-16"/>
      <img src={shopify} alt="shopify" className="ml-16" />
    </div>
  )
}

export  default  Brand
