// new와 생성자 함수
// 생성자 함수
// 생성자 함수와 일반 함수의 기술적인 차이는 없다.
// 다만 생성자 함수는 두가지 관례를 따라야한다.
// 1. 함수 이름의 첫글자는 대문자로 시작
// 2. 반드시 new 연산자를 붙여 실행

// 예시
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("john");

alert(user.name); // 보라
alert(user.isAdmin); // false

// new User(...)을 쓰면 아래와 같은 알고리즘이 동작
// 1. 빈 객체를 만들어 this에 할당
// 2. 함수 본문 실행
// 2-1. this에 새로운 프로퍼티가 추가되고 this를 수정함
// 3. this 반환
// 즉
function User2(name) {
  // this = {};  (빈 객체가 암시적으로 만들어짐)

  // 새로운 프로퍼티를 this에 추가함
  this.name = name;
  this.isAdmin = false;

  // return this;  (this가 암시적으로 반환됨)
}

//생성자 함수 메서드
function User3(name) {
  this.name = name;

  this.sayHi = function () {
    console.log("제 이름은 " + this.name + "입니다.");
  };
}

let john = new User3("john");

john.sayHi(); // 내 이름은 john입니다.

//
//
// 과제
//
//
// 계산기 생성자 함수 만들기
function Calculator() {
  this.read = function () {
    this.a = +prompt("a", 0);
    this.b = +prompt("b", 0);
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

// 누산기 생성자 함수 만들기
function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt("더할값", 0);
  };
}
