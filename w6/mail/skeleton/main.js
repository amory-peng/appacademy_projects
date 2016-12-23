// console.log("it's working!");
const Router = require('./router.js');
const Inbox = require('./inbox.js');
const Sent = require('./sent.js');
const Compose = require('./compose.js');

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
