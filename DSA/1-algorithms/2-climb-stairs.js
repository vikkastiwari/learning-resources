// Find distinct ways to climb the stairs in javascript.

const climbStairs = (n, count) => {
    if(count > n) return 0;
    if(count === n) return 1;

    return climbStairs(n,count+1) + climbStairs(n,count+2);
}

let res = climbStairs(5,0);
console.log(res);