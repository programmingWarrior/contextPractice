import React, { useContext } from 'react';
import { useState } from 'react';
import { CategoryContext } from '../../App';

const Header = () => {
    const [category,setCount] =useContext(CategoryContext);
    return (
        <div>
            <h1>This is header:{category}</h1>
            <button onClick={()=>setCount('Camera')}>Increment</button>
        </div>
    );
};

export default Header;