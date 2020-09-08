import React, { useState } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Categories from './components/Home/Categories/Categories';
import CategoriesDetail from './components/Home/Categories/CategoriesDetail/CategoriesDetail';
import { createContext } from 'react';


export const CategoryContext = createContext();
function App() {
  const [count,setCount] = useState('laptop');
  return (
   <CategoryContext.Provider value={[count,setCount]}>
     <Header count={count} setCount={setCount}></Header>
      <p>Count value:{count}</p>
     <Home count={count} setCount={setCount}></Home>
     <Shipment count={count}></Shipment>
   </CategoryContext.Provider>
  );
}

export default App;
