import React, { useEffect, useState } from 'react';
import "./Dashboard.css"
import { IoAddCircleOutline } from "react-icons/io5";
import { MdManageAccounts, MdOutlineLogout, MdOutlineAdminPanelSettings, MdLibraryAdd, MdProductionQuantityLimits } from "react-icons/md";
import useFirebase from '../../Hook/useFirebase'
import cogoToast from 'cogo-toast';
import axios from 'axios';

const Dashboard = () => {
    const {logout} = useFirebase()
    const [addProduct, setAddProduct] = useState(true);
    const [manageAllOrder, setManageAllOrder] = useState(false);
    const [managePRoduct, setMAnagePRoduct] = useState(true);
    const [makeAdmin, setMakeAdmin] = useState(true);

    const [productName, setPRoductName] = useState('')
    const [productDes, setPRoductDes] = useState('')
    const [productPrice, setPRoductPrice] = useState('')
    const [productImage, setPRoductImage] = useState('')

    


    const [manageORders, setManageORders] = useState([]);

    fetch('https://arcane-cliffs-11485.herokuapp.com/allorder')
    .then(res => 
       ( res.json())
     
    )
    .then(
        data => {
            setManageORders(data)
          
         
        },
        (error) => {
            console.log(error)
        })

        const adminDelete = (id) =>{
            const url = `https://arcane-cliffs-11485.herokuapp.com/admindeleteorder/${id}`;
            fetch(url,{
                method:"DELETE",
                headers:{"content-type": "application/json"}
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                // if(data.deletedCount){
                    
                   
    
                // }
            })
        }

    const addproductsubmit = (e) => {
        e.preventDefault()

        const product = { name: productName, description: productDes, price: productPrice, image: productImage };

        console.log(product);
        axios.post('https://arcane-cliffs-11485.herokuapp.com/addCycle', product)
            // fetch('https://arcane-cliffs-11485.herokuapp.com/addCycle',{
            //     method:'POST',
            //     body: product
            // })
            .then(res => {
                cogoToast.success('Product Added Successfully');
                console.log(res)
            });
        e.target.reset();
        setPRoductImage('')


      

         
    }

  
    return (
        <div>
         
            <div className='row mb-5 w-100'>

                <div style={{ borderRadius: "20px", backgroundColor: "#6e54f5", border: "1px solid red" }} className='col-md-2 m-5 p-0'>
                    <div className='p-4 text-center'><h1 style={{ fontSize: "40px", letterSpacing: "10px", fontWeight: "700", color: "white", fontStretch: "expanded" }}>ONZO</h1> <h5 style={{ color: "white", letterSpacing: "2px", marginTop: "10px" }}>DASHBOARD</h5></div>

                    <div style={{ color: "white", padding: "15px" }} className='text-center '>
                        <div className='d-flex justify-content-center mt-4 dashnav'>
                            <div style={{ width: "25px", marginLeft: "10px" }}><IoAddCircleOutline size={25} /></div>
                            <div onClick={()=>{setAddProduct(true);setMAnagePRoduct(false);setManageAllOrder(false);
                            setMakeAdmin(false)}} style={{
                                fontStyle: "poppins",
                                marginLeft: "10px", fontSize: "18px", fontWeight: "600", width: "100%", textAlign: "left"
                            }}> Add A Product</div>
                        </div>
                        <div className='d-flex justify-content-center mt-4 dashnav'>
                            <div style={{ width: "25px", marginLeft: "10px" }}><MdManageAccounts size={25} /></div>
                            <div onClick={()=>{setAddProduct(false);setMAnagePRoduct(false);setManageAllOrder(true);
                            setMakeAdmin(false)}} style={{
                                fontStyle: "poppins",
                                marginLeft: "10px", fontSize: "18px", fontWeight: "600", width: "100%", textAlign: "left"
                            }}> Manage All Orders </div>
                        </div>
                        <div className='d-flex justify-content-center mt-4 dashnav'>
                            <div style={{ width: "25px", marginLeft: "10px" }}><MdProductionQuantityLimits size={25} /></div>
                            <div onClick={()=>{setAddProduct(false);setMAnagePRoduct(true);
                            setManageAllOrder(false);
                            setMakeAdmin(false)}} style={{
                                fontStyle: "poppins",
                                marginLeft: "10px", fontSize: "18px", fontWeight: "600", width: "100%", textAlign: "left"
                            }}> Manage Product </div>
                        </div>
                        <div className='d-flex justify-content-center mt-4 dashnav'>
                            <div style={{ width: "25px", marginLeft: "10px" }}><MdOutlineAdminPanelSettings size={25} /></div>
                            <div onClick={()=>{setAddProduct(false);setMAnagePRoduct(false);setManageAllOrder(false);
                            setMakeAdmin(true)}} style={{
                                fontStyle: "poppins",
                                marginLeft: "10px", fontSize: "18px", fontWeight: "600", width: "100%", textAlign: "left"
                            }}> Make Admin </div>
                        </div>
                        <div>
                            <div onClick={logout} className='mx-auto adminlogout' style={{
                                border: "none",
                                display: "flex",
                                justifyContent: "center",
                                padding: "15px",
                                alighItems: "center",
                                marginTop: "30px",
                                borderRadius: "15px",
                                fontWeight: "600",
                                backgroundColor: "white", color: 'black',
                            }}><MdOutlineLogout size={25} /> LOGOUT</div>
                        </div>

                    </div>

                </div>
                <div className='col-md-8 mt-5'>
                    {/* ADD A PRODUCT  */}
                    {addProduct && <div style={{ backgroundColor: "#6e54f5", borderRadius: "30px", padding: "25px" }}>
                        <div>  <div>
                            <span style={{ fontSize: "35px", fontStyle: "italic", fontWeight: "700", color: "white", lineHeight: "-1.5px" }}>ADD A PRODUCT</span>
                        </div></div>
                        <form onSubmit={addproductsubmit} action="">
                            <div className='d-flex'>

                                <div className='w-100 text-left'>
                                    <div className='mt-5'>
                                        <span style={{ fontSize: "16px", fontWeight: "500", width: "100%", color: "white" }}>PRODUCT NAME *</span> <br />
                                        <input required onChange={(e) => { setPRoductName(e.target.value) }} style={{ padding: "10px", border: "1px solid #6e54f5", borderRadius: "15px", marginTop: "10px", width: "100%" }} placeholder='Under 5 Words' type="text" />
                                    </div>
                                    <div className='mt-3'>
                                        <span style={{ fontSize: "16px", fontWeight: "500", width: "100%", color: "white" }}>PRODUCT DESCRIPTION *</span> <br />
                                        <input required onChange={(e) => { setPRoductDes(e.target.value) }} style={{ padding: "10px", border: "1px solid #6e54f5", borderRadius: "15px", marginTop: "10px", width: "100%", height: "150px" }} placeholder='Not More Than 20 Words' type="text" />
                                    </div>
                                    <div className='mt-3'>
                                        <span style={{ fontSize: "16px", fontWeight: "500", width: "100%", color: "white" }}>PRODUCT PRICE *</span> <br />
                                        <input required onChange={(e) => { setPRoductPrice(e.target.value) }} style={{ padding: "10px", border: "1px solid #6e54f5", borderRadius: "15px", marginTop: "10px", width: "100%" }} placeholder='Number Only ($ value)' type="number" />
                                    </div>

                                </div>
                                <div className='w-100 m-5'>
                                    <div className=' '>
                                        <span style={{ fontSize: "16px", fontWeight: "500", width: "100%", color: "white" }}>PRODUCT IMAGE *</span> <br />
                                        <input required onChange={(e) => { setPRoductImage(e.target.value) }} style={{ padding: "10px", border: "1px solid #6e54f5", borderRadius: "15px", marginTop: "10px", width: "100%", }} placeholder='Paste A Valid Image Link' type="text" />
                                    </div>
                                    <div className=' '>
                                        <span style={{ fontSize: "16px", fontWeight: "500", width: "100%", color: "white" }}>IMAGE PREVIEW *</span> <br />
                                        <div className="w-100 d-flex justify-content-center">
                                            <div style={{ height: "200px", backgroundColor: "white", width: "200px" }}>
                                                <img width="100%" height="100%" src={productImage} alt="" />
                                            </div>
                                        </div>
                                        <button type="submit" className='mx-auto adminlogout' style={{
                                            border: "none",
                                            display: "flex",
                                            justifyContent: "center",
                                            padding: "15px",
                                            alighItems: "center",
                                            marginTop: "30px",
                                            borderRadius: "15px",
                                            fontWeight: "600",
                                            backgroundColor: "white", color: 'black',
                                        }}><MdLibraryAdd size={25} /> ADD PRODUCT</button>
                                    </div>
                                </div>

                            </div>
                        </form>
                   
                   
                    </div>}
                     {/* MANAGE ALL ORDER  */}
                {manageAllOrder && 
             <div className='haha' style={{backgroundColor:"rgb(110, 84, 245)",borderRadius:"25px",padding:"10px",color:"white"}}>          
                        <div  > 
                        <div  style={{borderBottom:"4px solid white"}}  className='row p-2 singlerow'>
                            <div
                            style={{borderRight:"1px solid white"}} className='col-md-3 col-3'>                      <span>PRODUCT NAME</span> 
                            </div>
                            <div   style={{borderRight:"1px solid white"}}  className='col-md-2 col-2'>
                                <span>PRICE</span> 
                            </div>
                            <div   style={{borderRight:"1px solid white"}}  className='col-md-4 col-6'>
                                <span>EMAIL</span> 
                            </div>
                            <div    className='col-md-2 col-1'>
                                <span>ACTION </span> 
                            </div>
                        </div>

                        {manageAllOrder && <div>

                            {manageORders.map(allorder =>  <div className='row singlerow p-2 justifu-content-center align-items-center'>
                            <div   style={{borderRight:"1px solid white"}} className='col-md-3 col-3'>                      <span>Extra Byte</span> 
                            </div>
                            <div   style={{borderRight:"1px solid white"}}  className='col-md-2 col-2'>
                                <span>250$</span> 
                            </div>
                            <div   style={{borderRight:"1px solid white"}}  className='col-md-4 col-6'>
                                <span>naymulislam01855@gmail.com</span> 
                            </div>
                            <div  className='col-md-2 col-1'>
                                <span> <button  onClick={()=>{adminDelete(allorder._id)}} style={{backgroundColor:"#cae7f1",padding:"8px",border:"none",borderRadius:"15px"}}>Remove</button> </span> 
                            </div>
                        </div> )}

                        </div>
                        }
                        

                        
                        
                        </div>
                 
             </div>   
                }
                </div>
               

            </div>
        </div>
    );
};

export default Dashboard;