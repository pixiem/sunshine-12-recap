import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route,Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import LoginPage from "./Component/loginPAge/LoginPage"
import useFirebase from './Hook/useFirebase';
import Shop from './Component/Shop/Shop';
import Dashboard from './Component/Dashboard/Dashboard';
import PlaceOrder from './Component/PlaceOrder/PlaceOrder';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import { useState } from 'react';
import Addreview from './Component/AddRevies/Addreview';


function App() {
  const{user,loading}= useFirebase();
  const [load,setLoad] = useState(false);
  setTimeout(()=>{ setLoad(true)}, 1500);
  return (
    <div className="App">
      {!load && <div style={{width:"100%",height:"800px",}} className="d-flex justify-content-center align-items-center" > <img width="300px" height="300px" src="./preloader.gif" alt="" /> </div> }
     {load && <BrowserRouter>
     <Navbar></Navbar>
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/login" element={<LoginPage />} />
       <Route path="/shop" element={<Shop />} />
       <Route path="/dashboard"  element={loading? <p>LOADING</p>: user.email ?<Dashboard />: <Navigate to="/login"/>}  />
       <Route path="/placeorder/:serviceId"  element={loading? <p>LOADING</p>: user.email ?<PlaceOrder />: <Navigate to="/login"/>}  />
       <Route path="/review"  element={loading? <p>LOADING</p>: user.email ?<Addreview />: <Navigate to="/login"/>}  />

       </Routes>
       <Footer></Footer>
    </BrowserRouter>}
    </div>
  );
}

export default App;
