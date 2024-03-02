import React, { useState } from "react";
import './AccordionComponent.css';

const Tab = ({ isActive, id, label, onChange }) => {
    return (
        <div className={`accordion-title ${isActive === id ? 'active' : ''}`} onClick={onChange}>
            <div>
                {label}
            </div>
            <span className="icon">{isActive ? '-' : '+'}</span>
        </div>
    )
}

const AccordionComponent = ({ item }) => {
    const [activeTab, setActiveTab] = useState(null);

    const onClickHandler = (index) => {
        setActiveTab(index === activeTab ? null : index);
    }

    return (
        <>
            {item.map((item, index) => (
                <div key={index} className="accordion-item">
                    <Tab 
                        label={item.label} 
                        isActive={item.id === activeTab}
                        id={item.id}
                        onChange={() => onClickHandler(item.id)}
                    ></Tab>
                    {item.id === activeTab && (
                        <div className="accordion-content">{item.content}</div>
                    )}
                </div>
            ))}
        </>
    )
}

export default AccordionComponent;