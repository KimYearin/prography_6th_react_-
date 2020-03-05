function addNewItem(list, itemText){
  var listItem = document.createElement('li');
  listItem.innerText = itemText;

  //삭제버튼
  var closebtn = document.createElement('button');
  closebtn.innerText = '삭제';
  closebtn.type = 'button';
  closebtn.className = "closebutton";
  closebtn.onclick = function(event) {event.target.parentElement.style.display="none";};
  listItem.appendChild(closebtn);

  //수정버튼
  var modifybtn = document.createElement('button');
  modifybtn.innerText = '수정';
  modifybtn.type = 'button';
  modifybtn.className = "modifybutton";
  listItem.appendChild(modifybtn);

  list.appendChild(listItem);

}

var inputText = document.getElementById('inputbox');
inputText.focus();

inputbox.onkeyup = function(event){
  if(event.which === 13){
    var itemText = inputText.value;
    if(!itemText || itemText === "" || itemText ===" ") return false; //blank방지
    addNewItem(document.getElementById('inlist'),itemText);
    inputText.focus();
    inputText.select();
    document.getElementById('inputbox').value='';
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.getElementById('inlist');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);



// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
