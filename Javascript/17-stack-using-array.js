class CustomStack {
    constructor(size) {
        this.top = -1;
        this.array = new Array(size);
    }

    push(value){
        if(this.top !== this.array.length-1){
            this.array[++this.top] = value;
        }else{
            console.log('Overflow');
        }
    }

    pop(){
        if(this.array.length){
            let val = this.array[this.top];
            this.top--;
            return val;

        }else{
            console.log('Underflow');
        }
    }

    peek(){
        if(this.top !== -1){
            console.log('Peek element:',this.array[this.top]);
        }
        return -1;
    }

    display(){
        if(this.top !== -1){
            console.log("Stack:");
            for(let i=this.top;i>=0;i--){
                console.log(this.array[i]);
            }
        }
        return -1;
    }
}

let st = new CustomStack(5);
st.push(1);
st.push(2);
st.push(3);
st.push(4);
st.push(4);
st.display();
st.pop();
st.pop();
st.display();
st.push(5);
st.display();
st.peek();