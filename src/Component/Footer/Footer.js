import React from 'react';
import "./Footer.css"
import { AiFillFilePdf } from "react-icons/ai";
const Footer = () => {
    return (<>        <div  className='row w-100 footerbg m-0 pb-4'>
            <div className='col-md-4 col-12 text-left m-5 pt-2'>
              
                <span style={{fontSize:"20px",color:"white"}}>ABOUT ONZO</span> <br /> <br /> <hr style={{border:"1px solid #7e7b88", width:"10%",margin:"0px"}} /> <br />
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae iure numquam iste. Soluta dolorum recusandae, explicabo libero veniam, cum deleniti similique culpa sed, facilis hic fugiat itaque sit voluptate inventore!</span> <br />
                <div>LOGO</div>
            </div>
            <div className='col-md-3 col-12 text-left mt-5'>
            <span style={{fontSize:"20px",color:"white"}}>RECENT NEWS</span> <br /><br /><hr style={{border:"1px solid #7e7b88", width:"10%",margin:"0px"}} />
            <div className='d-flex mt-3'>
            <div className='m-2'>
                <AiFillFilePdf size={24}/>
            </div>
            <div className='text-left m-2'>
              <span>Taking a ride in the California </span> <br />
              <span>July 5, 2017</span>
            </div>
            </div>
            <div className='d-flex'>
            <div className='m-2'>
                <AiFillFilePdf size={24}/>
            </div>
            <div className='text-left m-2'>
              <span>An expedition in the desert hills  </span> <br />
              <span>July 5, 2017</span>
            </div>
            </div>
            <div className='d-flex'>
            <div className='m-2'>
                <AiFillFilePdf size={24}/>
            </div>
            <div className='text-left m-2'>
              <span>A journey in the Colorado Mountains</span> <br />
              <>July 5, 2017</>
            </div>
            </div>
            </div>
            <div className='col-md-3 mt-5 text-left col-12'>
            <span style={{fontSize:"20px",color:"white"}}>INSTAGRAM FEED</span> <br /> <br /> <hr style={{border:"1px solid #7e7b88", width:"10%",margin:"0px"}} /> <br />
            <div className='d-flex'>
                <img style={{margin:"10px"}} width="100ox" height="100px" src="./a.jpg" alt="" />
                <img style={{margin:"10px"}} width="100ox" height="100px" src="./b.jpg" alt="" />
                <img style={{margin:"10px"}} width="100ox" height="100px" src="./3.jpg" alt="" />
            </div>
            <div className='d-flex'>
                <img style={{margin:"10px"}} width="100ox" height="100px" src="./4.jpg" alt="" />
                <img style={{margin:"10px"}} width="100ox" height="100px" src="./5.jpg" alt="" />
                <img style={{margin:"10px"}} width="100ox" height="100px" src="./6.jpg" alt="" />
            </div>
            </div>
            <div className='container '>
        <hr style={{border:"1px solid #7e7b88", margin:""}} /> 
        <center><span>ALL RIGHTS RESERVED. DEVELOPED BY MD NAYMUL ISLAM
</span></center>
        </div>
            
        </div>
        

      
     
        </>);
};

export default Footer;