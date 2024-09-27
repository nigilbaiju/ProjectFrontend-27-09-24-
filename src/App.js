
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/home/Home';
import Category from './components/Category/Category';
import Products from './components/Products/Products';
import Categoryview from './components/Category/Categoryview';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path ={'/'} element={<Login method='POST'/>}></Route>
        <Route path={'/home'} element={<Home/>}></Route>
        <Route path={'/category'} element={<Category/>}></Route>
        <Route path={'/Product'} element={<Products/>}></Route>
        <Route path={'/Categoryview'} element={<Categoryview/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
