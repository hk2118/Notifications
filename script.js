let Notifications = document.getElementById("Notification");
let read = document.getElementById("read");
let msg1 = document.getElementById("msg1");
let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
let count = document.getElementsByClassName("color");
Notifications.innerHTML = `Notification <span>${count.length}</span>`;
msg1.addEventListener("click", function () {
  this.classList.remove("color");
  span1.style.display = "none";
  Notifications.innerHTML = `Notification <span>${count.length}</span>`;
});
let msg2 = document.getElementById("msg2");
msg2.addEventListener("click", function () {
  this.classList.remove("color");
  span2.style.display = "none";
  Notifications.innerHTML = `Notification <span>${count.length}</span>`;
});
read.addEventListener("click", function () {
  msg1.classList.remove("color");
  span1.style.display = "none";
  msg2.classList.remove("color");
  span2.style.display = "none";
  Notifications.innerHTML = `Notification <span>${count.length}</span>`;
});
