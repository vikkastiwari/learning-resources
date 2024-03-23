import { useAccordionContext } from "./Accordion"
import { useAccordionItemContext } from "./AccordionItem";

export default function AccordionTitle({ children }) {
    const { toggleItem } = useAccordionContext();
    const id = useAccordionItemContext();

    return <h3 className="accordion-item-title" onClick={() => toggleItem(id)}>{children}</h3>;
}