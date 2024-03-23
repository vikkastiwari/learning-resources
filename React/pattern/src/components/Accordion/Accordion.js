import { createContext, useContext, useState } from 'react';
import AccordionItem from './AccordionItem';
import AccordionContent from './AccordionContent';
import AccordionTitle from './AccordionTitle';

const AccordionContext = createContext();

export function useAccordionContext() {
    const ctx = useContext(AccordionContext);

    // Best practice to handle this case when hook used with out proper wrapper 
    if(!ctx) {
        throw new Error("Must be wrapped by <Accordion>");
    }

    return ctx;
}

export default function Accordion({className, children}) {
    const [openItemId, setOpenItemId] = useState(null);

    function toggleItem(id) {
        setOpenItemId(prevId => prevId === id ? null : id);
    }

    const contextValue = {
        openItemId: openItemId,
        toggleItem,
    }

    return (
        <AccordionContext.Provider value={contextValue}>
            <ul className={className}>
                {children}
            </ul>
        </AccordionContext.Provider>
    )
}

/*
    This is clean code & good practice where we try to add components
     
    It is a common pattern and a common practice when building 
    such Compound Components to merge all those component identifiers 
    into one object you could say. And it is indeed also quite common 
    to use the main wrapping function object as an object to which all 
    the other identifiers should be merged because in JavaScript, 
    functions are, in the end, just values, to be precise, they are object values.
*/ 
Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;