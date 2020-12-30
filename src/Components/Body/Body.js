import React from 'react';
import './Body.css';
import './Function/FunctionExample';
import FunctionExample from './Function/FunctionExample';
import ClassExample from './ClassExample/ClassExample';

const Body = () => {
    return(
        <>
            <div class="body-container">
                This is our Body
                <div class = "examples">
                    <FunctionExample body="data passed in"/>
                    <FunctionExample body="this is different data"/>
                    <ClassExample value="Our data passed"/>
                </div>
            </div>
        </>
    )
}

export default Body;