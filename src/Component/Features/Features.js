import React from 'react';
import "./Features.css"
import { FiSettings,FiWifi,FiBatteryCharging,FiActivity } from "react-icons/fi";
import { MdSettingsSuggest } from "react-icons/md";
const Features = () => {
    return (<div className='features mt-5'>
        <div>
             <span style={{fontSize:"45px",fontStyle:"italic",fontWeight:"700",color:"black",lineHeight:"-1.5px"}}>FEATURES</span> 
        </div>
        <div className='row w-100'>
        <div className='col-md-4 col-12 p-5'>
            <div className='d-flex justify-content-center align-items-center'><div 
            style={{marginRight:"15px"}} className='mt-2'><FiSettings size={25} /></div> <span style={{fontSize:"22px"}}>All Weather Conditions</span> </div>
            <p style={{fontSize:"16px",marginTop:"13px"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nam facilis doloremque error nemo cum atque deserunt earum!
            </p>
        </div>
        <div className='col-md-4 col-12 p-5'>
            <div className='d-flex justify-content-center align-items-center'><div 
            style={{marginRight:"15px"}} className='mt-2'><FiWifi size={25} /></div> <span style={{fontSize:"22px"}}>GPS Tracking / Anti-Theft</span> </div>
            <p style={{fontSize:"16px",marginTop:"13px"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nam facilis doloremque error nemo cum atque deserunt earum!
            </p>
        </div>
        <div className='col-md-4 col-12 p-5'>
            <div className='d-flex justify-content-center align-items-center'><div 
            style={{marginRight:"15px"}} className='mt-2'><FiBatteryCharging size={25} /></div> <span style={{fontSize:"22px"}}>Supercharged Battery</span> </div>
            <p style={{fontSize:"16px",marginTop:"13px"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nam facilis doloremque error nemo cum atque deserunt earum!
            </p>
        </div>
        <div className='col-md-4 col-12 p-5'>
            <div className='d-flex justify-content-center align-items-center'><div 
            style={{marginRight:"15px"}} className='mt-2'><FiActivity size={25} /></div> <span style={{fontSize:"22px"}}>Sustainable Practices
            </span> </div>
            <p style={{fontSize:"16px",marginTop:"13px"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nam facilis doloremque error nemo cum atque deserunt earum!
            </p>
        </div>
        <div className='col-md-4 col-12 p-5'>
            <div className='d-flex justify-content-center align-items-center'><div 
            style={{marginRight:"15px"}} className='mt-2'><MdSettingsSuggest size={25} /></div> <span style={{fontSize:"22px"}}>Nexxt-Gen CrankShafts</span> </div>
            <p style={{fontSize:"16px",marginTop:"13px"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nam facilis doloremque error nemo cum atque deserunt earum!
            </p>
        </div>
        
        </div>
        </div> );
};

export default Features;