const history = {
  index: -1,
  urls: [],

  current() {
    if (this.index >= 0 && this.index < this.urls.length) {
      return this.urls[this.index];
    } else {
      console.log('No Page');
    }
  },

  visit(value) {
    this.urls.splice(this.index + 1);
    this.urls.push(value);
    this.index = this.urls.length - 1;
  },

  goBack() {
    if (this.index > 0) {
      this.index -= 1;
    } else {
      console.log('No Page to go Back');
    }
  },

  goForward() {
    if (this.index < this.urls.length - 1) {
      this.index += 1;
    } else {
      console.log('No Page to go Forward');
    }
  }
};

history.visit('a');
history.visit('b');
history.visit('c');
history.goBack();
history.goBack();
history.goBack();
history.goBack(); 
history.goForward(); 
history.visit('d');
history.goForward(); 
console.log(history.current());
console.log(history.urls, history.index); 
