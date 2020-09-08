import React from 'react';
import Categories from './Categories/Categories';

const Home = (props) => {
    const homeStyle = {
        border:'1px solid purple',
        margin:'10px',
        background:'yellow',
        borderRadius:'10px',
        padding:'20px'
    }
    return (
        <div style={homeStyle}>
            <h1>This is Home:{props.count}</h1>
            <Categories count={props.count} setCount={props.setCount}></Categories>
        </div>
    );
};

export default Home;