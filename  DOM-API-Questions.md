- Difference between document.getElementById, document.getElementsByClassName, and document.getElementsByTagName in the DOM:

    document.getElementById: Retrieves an element by its unique ID.
    document.getElementsByClassName: Retrieves elements by their class name, returning a collection.
    document.getElementsByTagName: Retrieves elements by their tag name, returning a collection.

- Difference between document.querySelector and methods like getElementsByClassName and getElementsByTagName:

    document.querySelector: Uses CSS-style selectors to find the first matching element.
    getElementsByClassName and getElementsByTagName: Return collections of elements based on class name or tag name.

- Purpose of using classList in JavaScript for manipulating classes on HTML elements:

    classList provides methods (add, remove, toggle, etc.) for easy manipulation of an element's classes.
    It helps in dynamically modifying class names without directly manipulating the className property.

- Live HTMLCollection and implications of using live collections in DOM manipulation:

    A live HTMLCollection reflects changes in the DOM automatically.
    Implications: Performance considerations, as live collections update in real-time, impacting iteration and retrieval.

- Concept of event propagation in the DOM and its relation to event bubbling and capturing:

    Event propagation describes the flow of events through the DOM.
    Bubbling: Events bubble up from the target element to the root (ancestors).
    Capturing: Events descend from the root to the target element.
    The event object's stopPropagation method can be used to prevent further propagation.

- React Reconciliation 
    It is the process through which React updates the Browser DOM. It makes the DOM updates faster in React. It updates the virtual DOM first and then uses the diffing algorithm to make efficient and optimized updates in the Real DOM.

    - Virtual DOM
        
        React renders JSX components to the Browser DOM, but keeps a copy of the actual DOM to itself. This copy is the Virtual DOM. We can think of it as the twin brother of the real or Browser DOM.
    
    - Diffing Algorithm

        How does this Virtual DOM compare itself to its previous version?

        This is where the Diffing Algorithm comes into play. Some concepts used by this Algorithm are:

        Two elements of different types will produce different trees.
        Breadth-First Search (BFS) is applied because if a node is found as changed, it will re-render the entire subtree hence Depth First Approach is not exactly optimal. (Ref: Fig.2)
        When comparing two elements of the same type, keep the underlying node as same and only update changes in attributes or styles.
        React uses optimizations so that a minimal difference can be calculated in O(N) efficiently using this Algorithm.