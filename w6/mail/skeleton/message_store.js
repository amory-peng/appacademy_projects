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
