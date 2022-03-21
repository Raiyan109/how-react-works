import React from 'react';

const Display = (props) => {
    return (
        <div style={{ border: '2px solid green', margin: '5px' }}>
            <h1> Name: {props.name} </h1>
            <p>so far steps today : {props.steps}</p>
        </div>
    );
};

export default Display;