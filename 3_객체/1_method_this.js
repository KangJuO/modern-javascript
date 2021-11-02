//1. 메소드 만들기
let user1 = {
  name: "John",
  age: 30,
};
//user.sayHi에 함수를 할당해 주었음
//객체 프로퍼티에 할당된 함수를 메소드라고 함
user1.sayHi1 = function () {
  console.log("안녕하세요!");
};

user1.sayHi1(); // 안녕하세요!

//이런식으로 이미 정의된 함수를 사용해서
function sayHi2() {
  console.log("안녕하세요!");
}

// 선언된 함수를 메서드로 등록할 수도 있음
user1.sayHi2 = sayHi2;

user1.sayHi2(); // 안녕하세요!

//2.메소드 단축구문
let user2 = {
  sayHi: function () {
    console.log("Hello");
  },
};

// 단축 구문을 사용하니 더 깔끔
user2 = {
  sayHi() {
    // "sayHi: function()"과 동일합니다.
    console.log("Hello");
  },
};

//3. this
//메소드 내부에서 this 키워드를 사용해 객체에 접근할 수 있음
let user3 = {
  name: "John",
  age: 30,

  sayHi() {
    // 'this'는 '현재 객체'를 나타냅니다.
    console.log(this.name);
  },
};

user3.sayHi(); // John

//4. 화살표 함수에서의 this
//화살표 함수는 일반 함수와는 달리 ‘고유한’ this를 가지지 않는다.
//화살표 함수에서 this를 참조하면, 화살표 함수가 아닌 ‘평범한’ 외부 함수에서 this 값을 가져온다.
//별개의 this가 만들어지는 건 원하지 않고, 외부 컨텍스트에 있는 this를 이용하고 싶은 경우 화살표 함수가 유용
let user4 = {
  firstName: "john",
  sayHi() {
    //함수 arrow()의 this는 외부 함수 user.sayHi()의 this 임
    let arrow = () => console.log(this.firstName);
    arrow();
  },
};

user4.sayHi(); // john

//
//
//
// 과제
//
//
//

// 1. this
function makeUser1() {
  return {
    name: "John",
    ref: this,
  };
}

let user5 = makeUser();

console.log(user5.ref.name); // 출력은 error

// this 값을 설정할 땐 객체 정의가 사용되지 않기 떄문에
// this 값은 호출 시점에 결정됨
// 위에서 makeUser의 this는 메서드가아닌 함수로서 호출되었기 떄문에 undefined
// this 값은 전체 함수가 된다!

function makeUser2() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}

let user6 = makeUser();

console.log(user6.ref().name); // John

// 이렇게 하면 ref()가 메소드가 되어 호출되는 시점에 this가 user5로 결정된다
// 따라서 name이 정상적으로 출력됨!

//2. this + method
//read => 프롬프트 창을 띄우고 두개의 값 입력받기
//sum => 두값의 합 반환
//mul => 두값의 곱 반환
let calculator = {
  sum() {
    return this.a + this.b;
    //calculator의 a,b, 더하기
  },
  mul() {
    return this.a * this.b;
    //calculator의 a,b, 곱하기
  },
  read() {
    this.a = +prompt("1", 0);
    this.b = +prompt("2", 0);
    //calculator의 a,b를 prompt로 받아온 값으로 할당
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
