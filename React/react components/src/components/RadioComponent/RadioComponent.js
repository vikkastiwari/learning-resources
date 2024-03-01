import React from "react";

const RadioComponent = ({label, value, isChecked, onChange}) => {
    return (
        <label>
            <input 
                type="radio"
                value={value}
                checked={isChecked}
                onChange={onChange}
            />
            {label}
        </label>
    )
}

export default RadioComponent;