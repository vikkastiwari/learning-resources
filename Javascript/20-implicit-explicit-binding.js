
var obj = {
    name: 'Vikas',
    display: function (){
        console.log(this.name);
    }
}

var obj1 = {
    name: 'Tiwari',
}

obj.display.call(obj1);