import React, { useContext } from 'react';
import { CategoryContext } from '../../../../App';

const CategoriesDetail = (props) => {
    const [category, setCount] = useContext(CategoryContext);
    return (
        <div>
            <h3>This is Categories Detail:{props.count}</h3>
            <h4>Selected Category:{category}</h4>
    <button onClick={()=>setCount('laptop')}>Upper button </button>
    
        </div>
    );
};

export default CategoriesDetail;