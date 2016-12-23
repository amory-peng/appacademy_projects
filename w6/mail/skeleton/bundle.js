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

	// console.log("it's working!");
	const Router = __webpack_require__(1);
	const Inbox = __webpack_require__(2);
	const Sent = __webpack_require__(4);
	const Compose = __webpack_require__(5);

	document.addEventListener('DOMContentLoaded', () => {
	  //add eventlisteners for ocmpose inbox and sent
	  document.querySelectorAll('.sidebar-nav li').forEach(li => {
	    li.addEventListener('click', ()=>{
	      console.log('ping');
	      window.location.hash = li.innerText.toLowerCase();
	    });
	  });
	  //rev up the router
	  const content = document.querySelector('.content');
	  new Router(content, routes).start();
	  window.location.hash = '#inbox';
	  console.log("test");
	});

	const routes = {
	  inbox: Inbox,
	  sent: Sent,
	  compose: Compose,
	};


/***/ },
/* 1 */
/***/ function(module, exports) {

	class Router {
	  constructor(node, routes) {
	    this.node = node;
	    this.routes = routes;
	  }

	  start() {
	    this.render();
	    window.addEventListener("hashchange", ()=>this.render());
	  }

	  render() {
	    this.node.innerHTML = '';
	    const route = this.activeRoute();
	    console.log(route);
	    if (route === undefined) {
	      this.node.innerHTML = "";
	    } else {
	      this.node.innerHTML = "";
	      this.node.appendChild(route.render());
	    }

	    // const newNode = document.createElement('p');
	    // newNode.innerHTML = route;
	    // this.node.appendChild(newNode);
	  }

	  activeRoute() {
	    const out = window.location.hash;
	    console.log(this.routes);
	    return this.routes[out.slice(1)];
	  }
	}

	module.exports = Router;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	const MessageStore = __webpack_require__(3);

	const Inbox = {};

	Inbox.render = function() {
	  const inbox = document.createElement('ul');
	  inbox.className = "messages";
	  const inboxMsgs = MessageStore.getInboxMessages();
	  inboxMsgs.forEach(msg => {
	    console.log(this.renderMessage(msg));
	    inbox.appendChild(this.renderMessage(msg));
	  });

	  return inbox;
	};


	Inbox.renderMessage = function(msg) {
	  const msgLi = document.createElement('li');
	  msgLi.className = 'message';
	  msgLi.innerHTML =
	    `<span class="from">${msg.from}</span><span class="subject">${msg.subject}</span ><span class="body">${msg.body}</span>`;
	  console.log(msgLi.innerHTML);
	  return msgLi;
	};


	module.exports = Inbox;


/***/ },
/* 3 */
/***/ function(module, exports) {

	const messages = {};

	messages.sent = [
	    {to: "bobby", subject: "ayy", body: "lmao"},
	    {to: "bobby", subject: "ayy", body: "lmao"},
	];

	messages.inbox = [
	  {from: "flay", subject: "kappa", body: "pride"},
	  {from: "flay", subject: "kappa", body: "pride"},
	];

	const MessageStore = {};
	MessageStore.getInboxMessages = function() {
	  return messages.inbox;
	};

	MessageStore.getSentMessages = function() {
	  return messages.sent;
	};

	class Message {
	  constructor(from, to, subject, body) {
	    this.from = from;
	    this.to = to;
	    this.subject = subject;
	    this.body = body;
	  }
	}

	let messageDraft = new Message("", "", "", "");

	MessageStore.updateDraftField = function(field, value) {
	  messageDraft[field] = value;
	};

	MessageStore.sendDraft = function() {
	  messages.sent.push(messageDraft);
	  messageDraft = new Message();
	};

	MessageStore.getMessageDraft = function() {
	  return messageDraft;
	};

	module.exports = MessageStore;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	const MessageStore = __webpack_require__(3);

	function Sent() {}

	Sent.render = function() {
	  const box = document.createElement('ul');
	  box.className = "messages";
	  const sentMsgs = MessageStore.getSentMessages();
	  sentMsgs.forEach(msg => {
	    box.appendChild(this.renderMessage(msg));
	  });
	  return box;
	};

	Sent.renderMessage = function(msg) {
	  const msgLi = document.createElement('li');
	  msgLi.className = "message";
	  msgLi.innerHTML =
	  `<span class="to">To: ${msg.to}</span><span class="subject">${msg.subject}</span><span class="body">${msg.body}</span>`;
	  return msgLi;
	};

	module.exports = Sent;
	// Inbox.render = function() {
	//   const inbox = document.createElement('ul');
	//   inbox.className = "messages";
	//   const inboxMsgs = MessageStore.getInboxMessages();
	//   inboxMsgs.forEach(msg => {
	//     console.log(this.renderMessage(msg));
	//     inbox.appendChild(this.renderMessage(msg));
	//   });
	//
	//   return inbox;
	// };
	//
	//
	// Inbox.renderMessage = function(msg) {
	//   const msgLi = document.createElement('li');
	//   msgLi.className = 'message';
	//   msgLi.innerHTML =
	//     `<span class="from">${msg.from}</span><span class="subject">${msg.subject}</span ><span class="body">${msg.body}</span>`;
	//   console.log(msgLi.innerHTML);
	//   return msgLi;
	// };
	//
	//
	// module.exports = Inbox;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	const MessageStore = __webpack_require__(3);

	const Compose = {};

	Compose.render = function() {
	  const draft = document.createElement('div');
	  draft.className = "new-message";
	  draft.innerHTML = this.renderForm();
	  draft.addEventListener("change", (e)=> {
	    const ele = e.target;
	    MessageStore.updateDraftField(ele.name, ele.value);
	  });

	  draft.addEventListener("submit", (e) => {
	    e.preventDefault();
	    MessageStore.sendDraft();
	    window.location.hash = "#inbox";
	  });
	  return draft;
	};

	Compose.renderForm = function() {
	  const draft = MessageStore.getMessageDraft();
	  let box = '<p class="new-message-header">';
	  box = `<form class="compose-form">`;
	  box += `<input placeholder="Recipient" type="text" name="to" value="${draft.to}">`;
	  box += `<input placeholder = "Subject" type="text" name="subject" value="${draft.subject}">`;
	  box += `<textarea name="body" rows="20" cols="80">${draft.body}</textarea>`;
	  box += `<button type="submit" class="btn btn-primary submit-message" name="button">Send</button>`;
	  box += `</form></p>`;

	  return box;
	};


	module.exports = Compose;


/***/ }
/******/ ]);