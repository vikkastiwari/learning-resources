// It won't work in nodejs env as window object is not available - run it in browser

window.localStorageWithExpiry = {
    setItem : function(key, value, expiryTime) {
        let result = {
            value,
            expiryTime : Date.now() + expiryTime
        };

        localStorage.setItem(key, JSON.stringify(result));
    },
    getItem : function(key) {
        let data = localStorage.getItem(key);
        data = JSON.parse(data);

        if(data.expiryTime <= Date.now()){
            return null;
        }

        return data.value;
    },
    removeItem : function(key) {
        localStorage.removeItem(key);
    },
    clearItem : function() {
        localStorage.clear();
    }
}

localStorageWithExpiry.setItem('key','value - Vikas', 1000);

setTimeout(() => {
    let res = localStorageWithExpiry.getItem('key');
    console.log(res);
},500)