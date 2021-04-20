
var list = document.querySelector('ul');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
  event.target.style.display = "none";
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("input1").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue != '') {
    document.getElementById("UL1").appendChild(li);
  }
  document.getElementById("input1").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Days Remaining: 3");
  span.className = "daysRemaining";
  span.appendChild(txt);
  li.appendChild(span);
}