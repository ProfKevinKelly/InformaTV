// Create an "x" button and append it to each list item
var MembList = document.getElementsByTagName("li");
for (var i = 0; i < MembList.length; i++)
{
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  MembList[i].appendChild(span);
}

// Click on an "x" button to hide the current list item (remove TC member)
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++)
{
  close[i].onclick = function()
  {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Create a new list item when clicking on the "Add" button (new reminder)
function newElement()
{
    var li = document.createElement("li");
    var inputValue = document.getElementById("NewRem").value;
    var memb = document.createTextNode(inputValue);
    li.appendChild(memb);
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