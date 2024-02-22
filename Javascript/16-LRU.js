class LRUCache {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
  }

  get(key) {
    if(!this.cache.has(key)) return -1;

    let val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key,val);

    return val;
  }

  put(key, value) {
    this.cache.delete(key);

    if (this.cache.size === this.capacity) {
      let val = this.cache.keys().next().value; // next() returns { value: 1, done: false }
      this.cache.delete(val);
      this.cache.set(key, value);
    } else {
      this.cache.set(key, value);
    }
  }

  // Implement LRU/MRU retrieval methods
  getLeastRecent() {
    return Array.from(this.cache)[0]; 
  }

  getMostRecent() {
    return Array.from(this.cache)[this.cache.size - 1];
  }
}

const LRU = new LRUCache(5);
LRU.put(1, "a");
LRU.put(2, "b");
LRU.put(3, "c");
LRU.put(4, "d");
LRU.put(5, "e");
LRU.put(6, "f");
console.log(LRU.cache);
LRU.get(2);
console.log(LRU.cache);
