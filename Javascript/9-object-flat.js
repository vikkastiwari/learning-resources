function flattenObject(obj, parentKey = '', ) {
    let result = {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = parentKey ? `${parentKey}.${key}` : key;

            if (typeof obj[key] === 'object' && obj[key] !== null) {
                // way 1
                let res = flattenObject(obj[key], newKey)
                result = {...result, ...res};

                // way 2
                // Object.assign(result, flattenObject(obj[key], newKey));
            } else {
                result[newKey] = obj[key];
            }
        }
    }

    return result;
}

const nestedObject = {
    a: {
        b: {
            c: 1
        },
        d: 2
    },
    e: 3
};

const flattenedObject = flattenObject(nestedObject);

console.log(flattenedObject);
// Output: { "a.b.c": 1, "a.d": 2, "e": 3 }
