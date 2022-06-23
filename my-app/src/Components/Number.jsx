import React from 'react';
import { useSelector } from 'react-redux';
import css from "./Button.module.css"

const Number = () => {
    const count = useSelector((state) => state.count)

    return (
        <div className={css.counter}>
            {count}
        </div>
    );
};

export default Number;