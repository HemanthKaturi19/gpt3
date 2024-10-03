import React from "react";
import Article from './assets/components/Article.jsx';
import Brand from './assets/components/Brand.jsx';
import Cta from './assets/components/Cta.jsx';
import Feature from './assets/components/Feature.jsx';
import Navbar from './assets/components/Navbar.jsx';
 import Blog from './assets/containers/Blog.jsx';
import Footer from './assets/containers/Footer.jsx';
 import Header from './assets/containers/Header.jsx';
import WhatGpt3 from './assets/containers/WhatGpt3.jsx';
import Rectangle from './assets/components/Rectangle.jsx'

const App=()=>{
  return(
    <div className="bg-full h-full text-gray-200 pt-6">
      <Navbar />
      <Header />
      <Brand />
      <WhatGpt3 />
      <Cta />
      <Blog />
      <Rectangle />
      <Article />
      <Footer/>
    </div>
  )
}
export default App