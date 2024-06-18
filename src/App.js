import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/home';
import HyueLipsticks from './components/hyueLipsticks';
import HyueNailpolish from './components/hyueNailpolish';
import Login from './components/Login';
import CartPage from './components/cart';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="hyue-lipsticks" element={<HyueLipsticks/>}/>
          <Route path="hyue-nailpolish" element={<HyueNailpolish/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="cart" element={<CartPage/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
