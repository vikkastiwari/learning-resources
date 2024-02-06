function convertKeysToCamelCase(obj) {
    if (obj && typeof obj === 'object') {
        return Object.keys(obj).reduce((acc, key) => {
            // const camelCaseKey = key.replace(/_([a-z])/g, (_, letter) => {console.log(_,letter),letter.toUpperCase()});
            
            // Without regex
            const words = key.split('_');
            const val = words.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')
            const camelCaseKey = words[0] + val;
                
            acc[camelCaseKey] = obj[key];
            return acc;
        }, {});
    } else {
        return obj;
    }
}

// Example usage:
const originalObject = { some_property: 'value', another_property: 'anotherValue' };
const camelCaseObject = convertKeysToCamelCase(originalObject);
console.log(camelCaseObject);