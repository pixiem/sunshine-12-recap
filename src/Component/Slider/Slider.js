import React from 'react';
import "./Slider.css"
import OwlCarousel from 'react-owl-carousel';  

import 'owl.carousel/dist/assets/owl.carousel.css';  

import 'owl.carousel/dist/assets/owl.theme.default.css';  
const Slider = () => {
    return ( <div  style={{marginTop:"-15px"}}  >

<OwlCarousel items={1}  
  autoplay ={true}  
  autoplayTimeout={4000}
  autoplayHoverPause={false} 
  smartSpeed={1000}
          className="owl-theme" 
          loop  
          nav  

          margin={0} >  

          <div className='bannerOne' >
          <div style={{marginLeft: "-28%"}}>
<span style={{fontSize:"20px",letterSpacing:"6px",fontFamily:"Carrois Gothic",color:"white"}}>LIGHTEST GETS LIGHTER</span> <br /> 
 <span style={{fontSize:"65px",fontStyle:"italic",fontWeight:"700",color:"white",lineHeight:"-1.5px"}}>ALL-NEW ONZO PRO</span> <br />
 <button style={{fontSize:"15px",fontWeight:"700"}} className='learnmore'>Explore</button>
</div>   
          </div>  

          <div className='bannerTwo' >
          <div style={{marginLeft: "-28%"}}>
<span style={{fontSize:"20px",letterSpacing:"6px",fontFamily:"Carrois Gothic",color:"white"}}>ONZO MOUNTAIN PRO
</span> <br /> 
 <span style={{fontSize:"65px",fontStyle:"italic",fontWeight:"700",color:"white",lineHeight:"-1.5px"}}>MOUNTAIN CLIMBER
</span> <br />
 <button style={{fontSize:"15px",fontWeight:"700"}} className='learnmore'>Shop Now</button>
</div>   
          </div>   
         

      </OwlCarousel>  
    </div>
    );
};

export default Slider;



