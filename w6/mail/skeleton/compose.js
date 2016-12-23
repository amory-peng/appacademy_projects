const MessageStore = require('./message_store.js');

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
