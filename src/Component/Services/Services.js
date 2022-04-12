import React from 'react';
import Card from '../Card/Card';

const Services = () => {
    return (
        <div>
              <div style={{marginBottom:"100px",marginTop:"40px"}}  >
             <span style={{fontSize:"45px",fontStyle:"italic",fontWeight:"700",color:"black",lineHeight:"-1.5px"}}>Lets Go Shopping</span> 
        </div>

        <div className='row m-5'>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>


        </div>
    );
};

export default Services;