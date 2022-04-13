import React, { useState } from 'react';
import "./Home.css"
import Navbar from "../Navbar/Navbar"
import Slider from '../Slider/Slider';
import Features from '../Features/Features';
import Review from '../Review/Review';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
const Home = () => {

    return (
        <div>
            {/* HEADER SECTION*/}
            
         <Slider></Slider>
            <div style={{marginTop:"-30px"}} className='row mx-auto'>
                <div  style={{backgroundColor:"black",height:"100px",borderRight:".5px solid #f1e8e8"}} className='col-12 col-md-4 d-flex justify-content-center align-items-center'>
                    <span style={{color:"#ff1816",fontSize:"25px"}}>01</span> <span style={{fontSize:"40px",color:"white"}}>STARTER</span>
                </div>
                <div  style={{backgroundColor:"black",height:"100px",borderRight:".5px solid #f1e8e8"}} className='col-md-4 col-12 d-flex justify-content-center align-items-center'>
                    <span style={{color:"#ff1816",fontSize:"25px"}}>02</span> <span style={{fontSize:"40px",color:"white"}}>ROAD</span>
                </div>
                <div  style={{backgroundColor:"black",height:"100px"}} className='col-12 col-md-4  d-flex justify-content-center align-items-center'>
                    <span style={{color:"#ff1816",fontSize:"25px"}}>03</span> <span style={{fontSize:"40px",color:"white"}}>PRO</span>
                </div>

            </div>
         
            <Services></Services> 
            <br />
            <Features></Features>
            <br />
            <div style={{marginTop:"-30px"}} className='row mx-auto'>
                <div  style={{backgroundColor:"black",height:"100px",borderRight:".5px solid #f1e8e8"}} className='col-12 col-md-4 d-flex justify-content-center align-items-center'>
                    <span style={{color:"#ff1816",fontSize:"25px"}}>01</span> <span style={{fontSize:"40px",color:"white"}}>BUY</span>
                </div>
                <div  style={{backgroundColor:"black",height:"100px",borderRight:".5px solid #f1e8e8"}} className='col-md-4 col-12 d-flex justify-content-center align-items-center'>
                    <span style={{color:"#ff1816",fontSize:"25px"}}>02</span> <span style={{fontSize:"40px",color:"white"}}>RIDE</span>
                </div>
                <div  style={{backgroundColor:"black",height:"100px"}} className='col-12 col-md-4  d-flex justify-content-center align-items-center'>
                    <span style={{color:"#ff1816",fontSize:"25px"}}>03</span> <span style={{fontSize:"40px",color:"white"}}>PRIDE</span>
                </div>

            </div>
           <Review></Review>
           
       
          
        </div>
    );
};

export default Home;