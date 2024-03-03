import React, { useEffect, useState } from "react";
import './AlertBox.css';

const AlertBox = ({type, message, autoCloseDelay, onClose}) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let timer;
        if(autoCloseDelay){
            timer = setTimeout(() => {
                setIsVisible(false);
                onClose();
            },autoCloseDelay);
        };

        return () => {
            clearTimeout(timer);
        };
    },[autoCloseDelay, onClose]);

    const handleClose = () => {
        setIsVisible(false);
        onClose();
    };

    return (
        <>
            {isVisible && <div className={`alert ${type}`}>
                {message}
                <span className="close" onClick={handleClose}>&times;</span>
            </div>}
        </>
    )
}

export default AlertBox;