// Create an "x" button and append it to each list item
var list = document.getElementsByTagName("li");
for (var i = 0; i < list.length; i++)
{
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  list[i].appendChild(span);
}

// Click on an "x" button to hide the current list item
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++)
{
  close[i].onclick = function()
  {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Create a new list item when clicking on the "Add" button
function newCircleMemb()
{
  var li = document.createElement("li");
  var inputValue = document.getElementById("NewMemb").value;
  var memb = document.createTextNode(inputValue);
  li.appendChild(memb);
  if (inputValue === '')
  {
    alert("You must enter a name!");
  }
  else
  {
      document.getElementById("TCMembList").appendChild(li);
  }
  document.getElementById("NewMemb").value = "";

  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++)
  {
    close[i].onclick = function()
    {
        var div = this.parentElement;
        div.style.display = "none";
    }
  }
}
function newReminder()
{
  var li = document.createElement("li");
  var inputValue = document.getElementById("NewRem").value;
  var rem = document.createTextNode(inputValue);
  li.appendChild(rem);
  if (inputValue === '')
  {
    alert("You must enter a reminder!");
  }
  else
  {
      document.getElementById("RemList").appendChild(li);
  }
  document.getElementById("NewRem").value = "";

  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++)
  {
    close[i].onclick = function()
    {
        var div = this.parentElement;
        div.style.display = "none";
    }
  }
}