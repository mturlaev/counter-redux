import React from 'react';
import { useDispatch } from 'react-redux';
import css from "./Button.module.css"

const Button = () => {
    
    const dispatch = useDispatch();


    const handleEcrement = () => {
        dispatch({type: "plus"})
    }

    const handleDecrement = () => {
        dispatch({type: "minus"})
    }

    const handleReset = () => {
        dispatch({type: "reset"})
    }
    
    return (
        <div className={css.btn}>
            <button onClick={handleEcrement}>plus</button>
            <button onClick={handleDecrement}>minus</button>
            <button onClick={handleReset}>reset</button>
        </div>
    );
};

export default Button;