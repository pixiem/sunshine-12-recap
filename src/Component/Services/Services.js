import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Services = () => {
 
    
    const[product,setProduct] = useState([]);
    const[loading,setLoading] = useState(true);

    setTimeout(() => {if(product.length === 0){
        fetch('http://localhost:5000/getCycle')
        .then(res => res.json())
        .then(
            (data) => {
                setProduct(data)
                setLoading(false);
             
            },
            (error) => {
            })
    }}, 2000);
    useEffect(() => () => {
        fetch('http://localhost:5000/getCycle')
            .then(res => res.json())
            .then(
                (data) => {
                    setProduct(data)
                    console.log(data)
                    setLoading(false)
                },
                (error) => {
                })
    }, [])


    return (
        <div>
            <div style={{ marginBottom: "100px", marginTop: "40px" }}  >
                <span style={{ fontSize: "45px", fontStyle: "italic", fontWeight: "700", color: "black", lineHeight: "-1.5px" }}>Lets Go Shopping</span>
            </div>

            <div className='row m-5'>
                {loading && <div className='d-flex justify-content-center mx-auto'><img src="./preloader.gif" alt="" /></div> }
                {product.map(products => <Card data={products}></Card>)}
              
            </div>


        </div>
    );
};

export default Services;