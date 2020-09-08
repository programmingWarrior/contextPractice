import React from 'react';
import { useContext } from 'react';
import { CategoryContext } from '../../App';

const Shipment = () => {
    const [category,setCount] = useContext(CategoryContext);
    return (
        <div>
            <h1>This is shipment:{category}</h1>
            <button onClick={()=>setCount('Mobile')}>increment</button>
        </div>
    );
};

export default Shipment;