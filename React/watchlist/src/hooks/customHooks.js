import { useState, useEffect } from "react";

const useThrottle = (text, delay) => {
    const [throttledText, setThrottledText] = useState(text);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setThrottledText(text);
      }, delay);
  
      return () => {
        clearTimeout(timer);
      };
    }, [text, delay]);
  
    return throttledText;
};

export default useThrottle;