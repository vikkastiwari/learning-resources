Function.prototype.customCall = function(
    context, ...args
){
    context = context || window;
    const uid = Symbol();
    context[uid] = this;
    const res = context[uid](...args);
    delete context[uid];
    return res;
}

Function.prototype.customBind = function(
    context, ...args
){
    const callback = this;
    return function(...innerArgs){
        return callback.apply(context, args.concat(innerArgs));
    }
}

function toCamelCase(obj){
    if(obj && typeof obj === 'object'){
        return Object.keys(obj).reduce((acc, key)=> {
            const words = key.split('_');

        })
    }
}

Promise.myRace = function (promises) {
    return new Promise((resolve, reject)=>{
        promises.forEach((promise) => {
            Promise.resolve(promise).then(resolve,reject);
        });
    })
}

function dbc (cb, wait) {
    let timeoutid;
    return function(...args){
        clearTimeout(timeoutid);
        timeoutid = setTimeout(()=>{
            cb.apply(this,args);
        },wait);
    }
}

function thtl (cb, wait){
    let lastTime = 0;
    const node = new Node(1);
    return function(...args){
        const currTime = Date.now();
        if(currTime-lastTime>=wait){
            cb.apply(this,args);
            lastTime = currTime;
        }
    }
}
