const MessageStore = require('./message_store.js');

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

//this is a test
