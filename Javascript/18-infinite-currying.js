
function add (a){
    return function (b){
        if(b) return add(a+b);
        return a;
    }
}

console.log(add(2)(3)(4)(5)());