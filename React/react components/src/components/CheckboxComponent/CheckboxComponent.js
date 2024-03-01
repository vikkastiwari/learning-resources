import React from "react";

const CheckboxComponent = ({label, isChecked, onChange}) => {
    return (
        <label>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={onChange}
            />   
                {label}
        </label>
    )
}

export default CheckboxComponent;