import React, { useState } from 'react';

const DropDown = ({label, id, options, callback, isCity=false}) => {

    const [selectedCountry, setSelectedCountry] = useState('');

    const onSelectCountry = (event) => {
        let value = event.target.value;
        callback(value);
        setSelectedCountry(value);
    }

    return (
        <>
            <label htmlFor={id}>{label}</label>
            <br />
            {!isCity && <select name={id} id={id} onChange={(event) => onSelectCountry(event)} >
                <option value="">Select an option</option>
                {options.map((option, idx) => {  
                    return <option key={idx} value={option?.name}>{option?.name?.toUpperCase()}</option>
                })}
            </select>}
            {isCity && <select name={id} id={id}>
                {options.map((option, idx) => {  
                    return <option key={idx} value={option}>{option?.toUpperCase()}</option>
                })}
            </select>}
        </>
    )
}

export default DropDown;