import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import LoginPage from "./Component/loginPAge/LoginPage"

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/login" element={<LoginPage />} />

       </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
