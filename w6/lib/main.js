const DOMNodeCollection = require('./dom_node_collection.js');

const readyCallbacks = [];
let docReady = false;

window.$l = (arg) => {
  if (arg instanceof HTMLElement) {
    return new DOMNodeCollection([arg]);
  }

  if (arg instanceof Function) {
    if (docReady) {
      return arg();
    } else {
      readyCallbacks.push(arg);
      return;
    }

  }
  return Array.from(document.querySelectorAll(arg));

};

window.$l(()=>console.log("kappa"));

document.addEventListener('DOMContentLoaded', () => {
  console.log("loaded!");
  readyCallbacks.forEach(el=> el());
});

window.$l(()=>console.log("pride"));

$l.extend = (obj1, ...otherObjs) => {
  console.log(otherObjs instanceof Array);
  otherObjs.forEach(obj=>{
      for(let prop in obj) {
        console.log(prop, obj[prop]);
        obj1[prop] = obj[prop];
      }
  });
  return obj1;
};

$l.ajax = (options) => {
  const defaults = {
    method: 'GET',
    url: '',
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    success: () => console.log("yay"),
    error: ()=> console.log("aww"),
  };

  $l.extend(defaults, options);
  console.log(defaults.success);
  const xhr = new XMLHttpRequest();
  xhr.open(defaults.method, defaults.url);
  xhr.onload = function() {
    console.log(xhr.status);
    console.log(xhr.responseType);
    console.log(xhr.response);
  }
  const optionalData = defaults.data;
  xhr.send(optionalData);
};
