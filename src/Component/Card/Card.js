import React from 'react';
import "./Cars.css"
const Card = () => {
    return (
        <div style={{width:"400px"}} className='col-md-3 col-12 mt-4 card '>
            <div style={{backgroundColor:"red",width:"50px", borderRadius:"50%",height:"50px",padding:"10px",fontSize:"10px",color:"white",fontWeight:"600"}}><span>For Sale</span></div>
            <img width="100%" src="./Product12_33c78349-cd28-4986-bfec-c16977738e60_600x.jpg" alt="" /> <br />
            <center>
                <img width="30%" src="./rating.png" alt="" />
                <br />
                <span style={{fontWeight:"600",fontSize:"22px"}}>Master Wheels</span></center>  <br /> 
            <span style={{fontWeight:"700",fontSize:"18px",color:"red"}}>USD. 120.00 $  </span > <s style={{color:"#7e7b88"}}>USD. 150.00</s> <br />
            <button style={{width:"100%",backgroundColor:"black",color:"white",padding:"15px",border:"none"}}>BUY NOW</button>
            
        </div>
    );
};

export default Card;