// 아래 코드를 switch문으로 변환
let a = +prompt("a?", "");

if (a == 0) {
  alert(0);
}
if (a == 1) {
  alert(1);
}

if (a == 2 || a == 3) {
  alert("2,3");
}

//정답
switch (a) {
  case 0:
    alert(0);
    break;

  case 1:
    alert(1);
    break;

  case 2:
  case 3:
    alert("2,3");
    break;
}

// 변수 a와 일치하는 case를 하나씩 검사하며 찾음
// 없거나, 실행되서 break를 만나면 switch문은 중단
// switch, case는 모든 형태의 표현식을 인수로 받을수 있음(연산가능)
// 같은 내용이 실행되면 25,26번째 줄과같이 묶을 수 있음
// switch, case는 변수의 자료형 또한 일치해야 함
