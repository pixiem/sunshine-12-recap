import axios from 'axios';
import cogoToast from 'cogo-toast';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFirebase from '../../Hook/useFirebase';
import Navbar from '../Navbar/Navbar';
import "./PlaceOrder.css"
const PlaceOrder = () => {
    const {user} = useFirebase();
    const {serviceId} =  useParams();
    const [product,setProduct] = useState([]);
    
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        fetch(`https://arcane-cliffs-11485.herokuapp.com/placeorder/${serviceId}`, {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
      
          })
        .then(res => res.json())
        .then(data => {
          
            setProduct(data)
            setLoading(false)})
            
    })
 const placeMyOrder = (id) =>{
     console.log(id)
     const order = { product:product,email:user.email };

     console.log(order);
     axios.post('https://arcane-cliffs-11485.herokuapp.com/addOrder', order)
         // fetch('https://arcane-cliffs-11485.herokuapp.com/addCycle',{
         //     method:'POST',
         //     body: product
         // })
         .then(res => {
             cogoToast.success('Product Added Successfully');
             console.log(res)
         });
     
  
 }
    return (
        <div>
         
            {loading && <img src="./preloader.gif" alt="" /> }
            <div className='row w-100'>
                <div className='col-md-5 m-5 col-12'>
                    <img width='80%' src={product.cycleImg} alt="" />
                    {!product.cycleImg &&  <img src="https://i.ibb.co/30TwQzC/preloader.gif" alt="" />}
                 <br />
                    <div className='m-5'>
                    <span style={{fontStyle:"poppins",fontSize:"18px",fontWeight:"500"}}>{product.cycleDes}</span>
                    <br />
                    <img width="100%" src="https://i.ibb.co/qC7tgh9/pngegg.png" alt="" />
                  
                    </div>
                    

                </div>
                <div style={{margin:"80px 30px"}} className='col-md-5 col-12 text-left'>
                <h3 style={{fontSize:"45px",fontWeight:"700",fontFamily:"Public San"}}>{product.cycleName}</h3>
                <hr />
                <div style={{width:"100% !important"}} className='row '>
                    <div className='col-md-4 mt-3  text-left'>
                            <h4>Price :</h4>
                            <h4>Regular Price :</h4>
                            <h4>Availability :</h4>
                    </div>
                    <div  className='col-md-8 mt-3 text-left'>
                            <h4 style={{color:"#fa3e2c"}}>USD {product.cyclePrice}$ </h4>
                           <h5  style={{color:"#fa3e2c",marginTop:"14px"}} > <s style={{color:"#c0c0c0"}} > USD . {parseInt(product.cyclePrice)+60}$ </s></h5>
                           <h4 style={{color:"#fa3e2c",marginTop:"10px"}}>In Stock! </h4>
                    </div>
                </div>
                <h3 className='mt-3 mb-0' style={{fontSize:"30px",fontWeight:"700",fontFamily:"Public San"}}>Shipping</h3>
                <hr className='mb-0 mt-3' />
                <div style={{width:"100% !important"}} className='row '>
                    <div className='col-md-12   text-left'>
                            <input placeholder='Full Name *' type="text" style={{padding:"2px 8px",border:"1px solid #c5bbbb",margin:"10px",backgroundColor:"white"}} />
                            <input placeholder='Phone Number *' type="text" style={{padding:"2px 8px",border:"1px solid #c5bbbb",margin:"10px",backgroundColor:"white"}} />
                            <input placeholder='City *' type="text" style={{padding:"2px 8px",border:"1px solid #c5bbbb",margin:"10px",backgroundColor:"white"}} />
                            <input placeholder='State *' type="text" style={{padding:"2px 8px",border:"1px solid #c5bbbb",margin:"10px",backgroundColor:"white"}} />
                            <input placeholder='Address *' type="text" style={{padding:"2px 8px",border:"1px solid #c5bbbb",margin:"10px",backgroundColor:"white",width:"77%"}} />
                            <input placeholder='ZIP CODE *' type="text" style={{padding:"2px 8px",border:"1px solid #c5bbbb",margin:"10px",backgroundColor:"white"}} /> <br />
                            <button onClick={()=>{placeMyOrder(serviceId)}} className='m-4' style={{width:"74%",backgroundColor:"black",color:"white",padding:"8px",border:"none",fontSize:"20px",fontWeight:"600"}}>PLACE ORDER</button>
                           
                    </div>
                    
                </div>

                </div>

            </div>
            
        </div>
    );
};

export default PlaceOrder;