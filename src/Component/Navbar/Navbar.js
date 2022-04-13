import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hook/useFirebase';
import "./Navbar.css"
import { CgProfile,CgShoppingCart } from "react-icons/cg";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import Badge from '@material-ui/core/Badge';
import MyOrder from '../MyOrderCard/MyOrder';

const Navbar = () => {
  const { user,logout} = useFirebase();
  const [myorder,setAllORde] = useState([]);
  
 
 
   if(user.email){
    fetch(`http://localhost:5000/myorder/${user.email}`)
    .then(res => res.json())
    .then(data => {
      setAllORde(data);
       
    })
   }


  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
 
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      
      
    </Box>
  );

    return (
        <div className='px-md-5'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid mt-5">
    <img width="120px" src="./logo.png" alt="" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  d-md-flex justify-content-between" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item me-md-5">
          <Link to="/" style={{color:"black",fontWeight:"600",textDecoration:"none"}}  className="nav-link " aria-current="page" href="#">HOME</Link>
        </li>
        <li className="nav-item me-md-5">
          <a style={{color:"black",fontWeight:"600"}}  className="nav-link" href="#">ABOUT</a>
        </li>
        <li className="nav-item">
          <a style={{color:"black",fontWeight:"600"}} className="nav-link" href="#">SHOP</a>
        </li>
        <li className="nav-item">
          <a style={{color:"black",fontWeight:"600"}} className="nav-link" href="#">GALLERY</a>
        </li>
        <li className="nav-item">
          <a style={{color:"black",fontWeight:"600"}} className="nav-link" href="#">NEWS</a>
        </li>
       
      </ul>
      
      {!user.email && <div className='d-flex align-items-center '>
           <Badge
      color="primary">
         
        <CgShoppingCart  onClick={toggleDrawer('right', true)} size={30}  />
      </Badge>  <div>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
            <div style={{height:"400px"}} className='d-flex justify-content-center align-items-center'>
            <center ><span style={{fontWeight:"600"}}>LOGIN FOR SHOW YOUR ORDER</span></center>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
    <span  class="btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
           {!user.email && <Link style={{textDecoration:"none",color:"black"}} to='/login'><CgProfile size={30}/></Link>} </span>
      </div>}
      {user.email && <div className='d-flex align-items-center'> <Badge badgeContent={myorder.length} 
      color="primary">
         
        <CgShoppingCart  onClick={toggleDrawer('right', true)} size={30}  />
      </Badge><div>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
            {myorder.map(order=> <MyOrder data={order} ></MyOrder>)}
          
          </Drawer>
        </React.Fragment>
      ))}
    </div>
        <div  className="ms-3dropdown">
  <button className="btn profile dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {user.photoURL ? <img width='40px' style={{borderRadius:"50%"}} src={`${user.photoURL}`} alt="" /> :<img width='30px' style={{borderRadius:"50%"}} src='./pngegg (1).png' alt="" /> } <span style={{fontSize:"18px"}}>My Profile</span>
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <Link style={{color:"white"}} className="dropdown-item" to="/Myorder">My Orders</Link>
    <Link style={{color:"white"}} className="dropdown-item" to="/dashboard">Dashboard</Link>
    <span onClick={logout}  style={{color:"white"}} className="dropdown-item">Log Out</span>
    
  </div>
</div></div>}
    </div>
  </div>
</nav> <hr />
        </div>
    );
};

export default Navbar;