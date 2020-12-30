import React, {useState} from 'react';
import './FunctionExample.css';

function FunctionExample(props){
    const [counter, setCounter] = useState(0);
    return(
        <>
            <div class="function-container">
                This is an example of a function.
                <br/>
                The data passed into this function says 
                <br/>
                {props.body}
                <br/>
                <button onClick={e => setCounter(counter + 1)}/>
                {counter}
            </div>
        </>
    );
}

export default FunctionExample;