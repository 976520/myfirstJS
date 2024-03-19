
const loginForm = document.querySelector("#login-form");
//l1 quryselector - > getElementById
const loginInput = document.querySelector("#login-form input");
//login form 에서 입력값 받음
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

//자주 쓰는 string 변수로 선언
const hiddenClassName = "hidden"; 
const usernameKey = "username";

function onLoginSubmit(event) {
    //호출받을 시 event object를 argument로 전송
    event.preventDefault();

    loginForm.classList.add(hiddenClassName); //loginform hidden
    //form의 기본동작 = submit
    //기본행동(function submit -> f5)을 block
    const username = loginInput.value; //변수에 입력값 할당
    console.log(username); //username 출력
    localStorage.setItem(usernameKey, username); //username 저장

    paintGreeting();
    
}

function paintGreeting() {
    const username = localStorage.getItem(usernameKey);
    greeting.innerText = "Hello " + username + "!";
    greeting.classList.remove(hiddenClassName);
}

const savedUsername = localStorage.getItem(usernameKey); //Storage에서 username을 load

if (savedUsername === null) { //유저 정보가 없을 경우
    //form 보이게 
    loginForm.classList.remove(hiddenClassName);
    loginForm.addEventListener("submit", onLoginSubmit); // submit event 발생시 onLoginSubmit 호출
} else {

    paintGreeting();
    
}

//addEventListener 의 function 은 직접 실행하지 않는다.