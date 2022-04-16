import React, { useState } from 'react';
import "./Review.css"
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
const Review = () => {
    const [review , setReview]= useState([]);
    fetch('https://arcane-cliffs-11485.herokuapp.com/allreview')
    .then(res=>res.json())
    .then(data=>setReview(data))
    return (
        <div className='reviewSec pb-5' >
              <div className='my-5'>
             <span style={{fontSize:"45px",fontStyle:"italic",fontWeight:"700",color:"black",lineHeight:"-1.5px"}}>CUSTOMER REVIEWS</span> 
        </div>
        <OwlCarousel items={3}  
 
  autoplayTimeout={2000}
  autoplayHoverPause={false} 
  smartSpeed={1000}
          className="owl-theme" 
          loop  
          nav  

          margin={0} >  
{review.map(singleReview => 
      <div  className='p-4 card' style={{width:"373px"}}>
      <div ><img 
      src="./rating.png" alt="" /></div>
      <div  className='text-left mt-3'><span style={{fontFamily:"Open Sans",fontSize:"17px",fontStyle:"italic",color:"#757575"}}>{singleReview.review}</span></div>
      <div className='d-flex'>
          <div style={{marginRight:"20px",marginTop:"15px"}}><img width="50px"  src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars.png" alt="" /></div>
          <div style={{marginTop:"15px"}}> 
              <div className='text-left'><span style={{color: "#ff1816",
fontFamily: "",
fontSize: "22px",
fontWeight: "700"}}>{singleReview.name}</span></div> 
<div className='text-left'>
<span style={{fontSize:"15px",fontWeight:"600",color:"#a8a8a8"}}>CUSTOMER</span>
</div>
              
            </div>
      </div>
  </div> )}

          
        
        
        
          
         
      </OwlCarousel>  
        </div>
    );
};

export default Review;