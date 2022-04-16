import axios from 'axios';
import cogoToast from 'cogo-toast';
import React, { useState } from 'react';
import "./Addreview.css"
const Addreview = () => {
    const [name , setName] = useState('');
    const [review , setReview] = useState('');
    console.log(name,review)
    const addreview =(e)=>{
        e.preventDefault()
        e.target.reset()
        const aREview = {name:name,review:review}
        axios.post('https://arcane-cliffs-11485.herokuapp.com/reviewadd', aREview)
        .then(res => {
            cogoToast.success('Review Added');
            console.log(res)
        });
    }
    return (
        <div className='d-flex justify-content-center mb-5'>
            <div style={{width:"80%",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",borderRadius:"50px"}} className='text-center p-5'>
                <form onSubmit={addreview} action="">
                <h3>ADD A REVIEW</h3>
                <h5 className='mt-4 mb-2' style={{fontWeight:"700",fontFamily:"poppins"}}>Your Name</h5>
                <input onChange={(e)=>{setName(e.target.value)}}  className='mt-3' placeholder="Enter Full Name" style={{borderTop:"none",borderBottom:"2px solid #cec9c1",
                paddingRight:"25px",paddingLeft:"25px",paddingBottom:"15px",
                borderLeft:"none",borderRight:"none"}} type="text" name="" id="" />
                <h5 className='mt-4 mb-2' style={{fontWeight:"700",fontFamily:"poppins"}}>Your Experience</h5>
                <input onChange={(e)=>{setReview(e.target.value)}} placeholder="Describe Yout Experience" style={{border:"2px solid #cec9c1",height:"80px",padding:"25px"}} type="text" name="" id="" /> <br />
                <button  style={{marginTop:"15px",padding:"10px",border:"none",color:"white",backgroundColor:"#ff1816"}} type="submit">SUBMIT REVIEW</button>
                </form>
               

            </div>
        </div>
    );
};

export default Addreview;