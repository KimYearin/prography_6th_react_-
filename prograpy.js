//to do list js

var totalItems=0; //리스트개수

function addNewItem(list, itemText){ //리스트추가함수
  var listItem = document.createElement('li');
  listItem.innerText = itemText;
  listItem.id="li_"+totalItems;

  //삭제버튼
  var closebtn = document.createElement('button');
  closebtn.innerText = '삭제';
  closebtn.type = 'button';
  closebtn.className = "closebutton";
  closebtn.onclick = function(event) {event.target.parentElement.style.display="none";}; //삭제버튼 눌렀을 때 삭제하는 함수
  listItem.appendChild(closebtn);

  //수정버튼
  var modifybtn = document.createElement('button');
  modifybtn.innerText = '수정';
  modifybtn.type = 'button';
  modifybtn.className = "modifybutton";
  modifybtn.id="mo_"+totalItems;
  modifybtn.onclick = function(event) { //수정버튼 눌렀을 때 수정
    var presentID = event.target.id.replace('mo_','');
    var pastnum = document.getElementById('li_'+presentID);
    var pastValue = pastnum.textContent;

    var newInput = prompt("수정해주세요!",pastValue.replace('삭제수정',' '));
    if(!newInput || newInput === "" || newInput === " ") return false;
    addNewItem(document.getElementById('inlist'),newInput);
    event.target.parentElement.style.display="none";
  };
  listItem.appendChild(modifybtn);

  list.appendChild(listItem);
  totalItems++;
}

var inputText = document.getElementById('inputbox'); //입력받은 내용 저장
inputText.focus();

inputbox.onkeyup = function(event){
  if(event.which === 13){ //enter입력했을때 추가
    var itemText = inputText.value;
    if(!itemText || itemText === "" || itemText ===" ") return false; //blank방지
    addNewItem(document.getElementById('inlist'),itemText);
    inputText.focus(); //입력 후에 다시 초점을 맞춤
    inputText.select();
    document.getElementById('inputbox').value='';
  }
}

// 클릭했을때 밑줄생성
var list = document.getElementById('inlist');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
