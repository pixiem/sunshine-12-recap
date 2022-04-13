import React from 'react';
import { Link } from 'react-router-dom';
import "./Cars.css"
const Card = (props) => {
    const data = props.data;
   
    return (
        <div style={{width:"400px"}} className='col-md-3 col-12 mt-4 card '>
            <div style={{backgroundColor:"red",width:"50px", borderRadius:"50%",height:"50px",padding:"10px",fontSize:"10px",color:"white",fontWeight:"600"}}><span>For Sale</span></div>
            <img width="100%" src={data.cycleImg} alt="" /> <br />
            <center>
                <img width="30%" src="./rating.png" alt="" />
                <br />
                <span style={{fontWeight:"600",fontSize:"22px"}}>{data.cycleName}</span></center>  <br /> 
            <span style={{fontWeight:"700",fontSize:"18px",color:"red"}}>USD. {data.cyclePrice}.00 $  </span > <s style={{color:"#7e7b88"}}>USD. { parseInt(data.cyclePrice) + 60} .00</s> <br />
            <Link to={`/placeorder/${data._id}`} style={{width:"100%",backgroundColor:"black",color:"white",padding:"15px",border:"none"}}>BUY NOW</Link>
            
        </div>
    );
};

export default Card;