// 출력결과는?
let firstName = null;
let lastName = null;
let nickName = "바이올렛";

alert(firstName ?? lastName ?? nickName ?? "익명의 사용자"); // : 바이올렛

// "??", "||" 차이
// ||는 첫 번째 truthy 값을 반환
// ??는 첫 번째 정의된(defined) 값을 반환

let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0

//14번 줄 => height=0으로 falsy한 값이므로 첫번째 truthy한 값인 100 반환
//15번 줄 => heigh=0으로 정의된 값이므로 0 반환

// 요약
// null 병합 연산자 ??를 사용하면 피연산자 중 ‘값이 할당된’ 변수를 빠르게 찾을 수 있음
// ??는 변수에 기본값을 할당하는 용도로 사용할 수 있음 => 정의가 안되있으면 다음 정의된 값을 찾아가는 방식으로
// ??의 연산자 우선순위는 대다수의 연산자보다 낮고 ?와 = 보다는 높음
// 괄호 없이 ??를 ||나 &&와 함께 사용하는 것은 금지
