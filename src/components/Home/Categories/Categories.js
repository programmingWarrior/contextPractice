import React from 'react';
import CategoriesDetail from './CategoriesDetail/CategoriesDetail';
import { useContext } from 'react';
import { CategoryContext } from '../../../App';

const Categories = (props) => {
    const category = useContext(CategoryContext);
    return (
        <div>
            <h2>This is categories:</h2>
            <h1>This is the Category:{category}</h1>
            <CategoriesDetail count={props.count} setCount={props.setCount}></CategoriesDetail>
        </div>
    );
};

export default Categories;