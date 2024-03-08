import React, { useState } from 'react';
import './Explorer.css';

const Folder = ({explorer}) => {

    const [isVisible, setIsVisibile] = useState(false);

    if(explorer.isFolder){
        return (
            <>
                <div style={{paddingLeft: '20px', cursor:'pointer'}} onClick={() => setIsVisibile(!isVisible)}>{explorer.name}</div>
                {isVisible ? explorer.item.map((exp) => {
                    return <div key={exp.name} style={{paddingLeft:'20px', cursor:'pointer'}}>
                        <Folder explorer={exp}></Folder>
                    </div>
                }) : ''}
            </>
        );
    }else{
        return (
            <div style={{paddingLeft: '20px'}}>{explorer.name}</div>
        );
    }
}

export default Folder;