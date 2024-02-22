function flattenObject(obj, parentKey = '', ) {
    let result = {};
    for(const key in obj){
        if(obj.hasOwnProperty(key)){
            let newKey = parentKey ? `${parentKey}.${key}` : key;
            if(typeof obj[key] === 'object' && obj[key]!==null){
                let res = flattenObject(obj[key],newKey);
                result = {...result,...res};
            }else{
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