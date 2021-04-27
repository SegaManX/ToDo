
var list = document.querySelector('ul');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
  event.target.style.display = "none";
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var input1Value = document.getElementById("input1").value;
  var input2Value = document.getElementById("input2").value;
  var t = document.createTextNode(input1Value);
  li.appendChild(t);
  if (input1Value != '' && input2Value != '') {
    document.getElementById("UL1").appendChild(li);
  }
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Date due: " + input2Value);
  span.className = "daysRemaining";
  span.appendChild(txt);
  li.appendChild(span);
}