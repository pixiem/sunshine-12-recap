import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route,Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import LoginPage from "./Component/loginPAge/LoginPage"
import useFirebase from './Hook/useFirebase';
import Dashboard from './Component/Dashboard/Dashboard';


function App() {
  const{user}= useFirebase();
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/login" element={<LoginPage />} />
       <Route path="/dashboard"  element={ user.email ?<Dashboard />: <Navigate to="/login"/>}  />

       </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
