// map은 키가있는데이터를 저장
// 객체와 다른점 - 키에 다양한 자료형을 가질 수 있다

let map1 = new Map();

map1.set("1", "string"); //문자형 키
map1.set(1, "number"); //숫자형 키
map1.set(true, "boolean"); // 불린형 키

console.log(map1);
console.log(map1.get(1));
console.log(map1.get("1"));
console.log(map1.size);
console.log(map1.has("1")); //해당 키가 있는지 없는지

map1.delete("1");

console.log(map1);

map1.clear();

console.log(map1);

//키에 객체도 사용할 수 있다
let john = { name: "john" };

let map2 = new Map();

map2.set(john, 12);

console.log(map2);

//set 체이닝가능
map1.set("first", 1).set("second", 2).set("third", 3);

console.log(map1);

//맵요소에 반복작업
for (let key of map1.keys()) console.log("keys", key); //이터러블 객체 반환(키)

for (let value of map1.values()) console.log("values", value); //이터러블 객체 반환(값)

for (let [key, value] of map1.entries()) console.log("entries", key, value);
//[키, 값]을 한쌍으로하는 이터러블 객체 반환 (for... of)
//객체에 적용하면 [key, value]를 가지는 배열을 반환함

map1.forEach((value, key, map) => {
  console.log(value, key, map);
});
