import React from 'react';
import classes from "../../../styles/MySelect.module.css";

const MySelect = ({options, defaultValue, value, onChange, ...props}) => {
    return (
        <select
            {...props}
            className={classes.mySelect}
            value={value}
            onChange={event => onChange(event.target.value)}
        >

            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option id={option.id} key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;