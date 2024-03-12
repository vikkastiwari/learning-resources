
function throttle(arr, limit, callback, delay) {
    let lastRan = null;
    let copyArr = [...arr];
    let timerId;

    return function() {
        if(!lastRan){
            let elements = copyArr.splice(0,limit);
            callback(elements);
            lastRan = Date.now();
        }else {
            clearTimeout(timerId);
            timerId = setTimeout(() => {
                // This condition checks if the specified delay is less than or equal 
                // to the time that has passed since the last time the function ran.
                if(delay <= (Date.now() - lastRan)){
                    let elements = copyArr.splice(0,limit);
                    callback(elements);
                    lastRan = Date.now();
                }
            }, delay - (Date.now() - lastRan));
            /*
             * delay - (Date.now() - lastRan)) : determines the delay before the function is executed. 
             * It calculates the remaining time left until the next execution based on the difference between the specified delay and the time that has passed since the last execution.
             * If the time difference (Date.now() - lastRan) is greater than the specified delay (delay), the function executes immediately.
             * Otherwise, it calculates the remaining time by subtracting the time difference from the delay.
             * This mechanism allows the function to run at regular intervals with the specified delay while adjusting for any delays caused by processing time or network latency.
            */ 
        }
    }
}

let arr = [1,2,3,4,5,6,7,8,9];
let limit = 2;
let btnId = document.getElementById('btn');
btnId.addEventListener('click', throttle(arr, limit, (tasks) => {
    console.log(tasks);
}, 2000));