import React from 'react';

const MyOrder = (props) => {
    const data = props.data.product;
    const deleteMyOrder = (id) =>{
        const url = `http://localhost:5000/deletemyorder/${id}`;
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
    return (
        <div style={{backgroundColor:"orange",borderRadius:"15px"}} className='d-flex m-2'>
             <div> <img width="150px" style={{margin:"12px",borderRadius:"10px"}} src={data.cycleImg} alt="" /> </div>
              <div className='m-3 text-left w-100'>
                <h4 className="m-0">{data.cycleName}</h4>
                <h5 className="mb-1">USD:{data.cyclePrice} $</h5>
               <button onClick={()=>{deleteMyOrder(props.data._id)}} style={{backgroundColor:"black",color:"white",border:"none",padding:"8px",fontWeight:"600"}} className='w-100'>CANCEL</button>
              </div>


           </div>
    );
};

export default MyOrder;