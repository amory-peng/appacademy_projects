/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const DOMNodeCollection = __webpack_require__(1);

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


/***/ },
/* 1 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);