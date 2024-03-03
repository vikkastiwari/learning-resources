import React, { useState } from "react";
import './DropDown.css';

const DropDown = ({ options, onSelect }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Select an Option');

    const onOptionClickHandler = (option) => {
        onSelect(option);
        setSelectedOption(option.label)
        setIsOpen(false);
    }

    return (
        <>
            <div className="dropdown">
                <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>{selectedOption}</button>
                {isOpen && (
                    <div className="dropdown-option">
                        {options.map((option, index) => (
                            <div className="dropdown-item" key={index} onClick={() => onOptionClickHandler(option)}>{option.label}</div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default DropDown;