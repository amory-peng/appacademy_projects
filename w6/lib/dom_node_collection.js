class DOMNodeCollection {
  constructor(arr) {
    this.elements = arr;
  }

  html(str) {
    if (str === undefined) {
      return this.elements[0].innerHTML;
    }
    else {
      this.elements.forEach(el => {
        el.innerHTML = str;
        return str;
      });
    }
  }

  empty() {
    this.elements.forEach(el => {el.innerHTML = '';});
  }

  append(arg) {
    if (typeof arg === 'string') {
      this.elements.forEach(el => {
        console.log(el.innerHTML, arg);
        el.innerHTML += arg;
      });
    }
  }

  children() {
    const out = [];
    this.elements.forEach(el => {
      Array.from(el.children).forEach(child => {
        out.push(new DOMNodeCollection(child));
      });
    });
    return new DOMNodeCollection(out);
  }

  parent() {
    const out = [];
    this.elements.forEach(el => {
      out.push(new DOMNodeCollection(el.parentNode));
    });
    return out;
  }

  find(arg) {
    let out = [];
    this.elements.forEach(el => {
      out = out.concat(Array.from(el.querySelectorAll(arg)));
    });
    return new DOMNodeCollection(out);
  }

  remove() {
    this.empty();
    this.elements = [];
  }

  on(e, cb) {
    this.elements.forEach(el => {
      el.addEventListener(e, cb);
      el.cb = cb;
    });
  }

  off(e) {
    this.elements.forEach(el=>{
      el.removeEventListener(e, el.cb);
      el.cb = null;
    });
  }
}

module.exports = DOMNodeCollection;
