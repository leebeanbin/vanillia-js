const title = document.querySelector("#title");
/*title.innerHTML = "I'd changed the html";
title.style.color = "white"; 
document.title = "happy";*/

/* Js에서 DOM이라는 것으로 html을 바꿀 수 있다.
dir은 로깅하기 전에 개체의 복사본을 취하는 반면, 
log은 콘솔에 대한 참조를 전달하기 때문에 온라인으로 읽을 수 있습니다.  */ 
/* 1. getElementById라는 것은 ()안에 id에서 요소를
가져 오는것이다. 그리고 querySelector은()안에 태그
즉 #title , .title 이런것을 적으면 그걸 선택해서
그 html을 수정할 수 있게 해준다!*/ 

function handleClick(){
    title.style.color = "yellow";
}

window.addEventListener("click", handleClick);
/*handelResize 라고 쓴 이유는 내가 원하는 시점에서 호출 가능 */
/* addEventListener는 이벤트를 추가를 할 수 있고
(이벤트 타입, 호출 함수(이벤트 객체)), alert는 경고 창 띄움.