/*
반복문
표현식(조건식)의 평가 결과가 참인경우 코드블록을 실행합니다
그 후 조건식을 다시 평가해서 여전히 참이면, 코드블록을 다시 실행합니다
이 표현식(조건식)이 거짓일때까지 반복실행합니다

반복문으로 사용할 수 있는 문
1. 기본 반복문
for 문, while문, do...while문
2. for of, for in 반복문(ES6)
3. forEach메서드, map 메서드

메서드란??
let stc = {
    name : "OH",
    address : "부천",
    add : function(){}
}
이렇게 객체 내부에 선언된 함수로, 객체에 종속된 기능,
함수를 메서드라고 합니다

while문
주어진 조건식의 평가 결과가 참이면 코드블록을 계속 반복 실행하며,
이때 반복횟수는 정해지지 않는다
따라서 주의해야하는데 잘못하면 무한루프에 빠질수 있습니다
그래서 확실한 상황이 아니라면 사용을 피하고 다른 반복문을 사용하는
것이 좋으나, 장점은 반복횟수을 알수없는 경우 사용하면 좋습니다
let count = 0;
while (count < 3) {
    console.log(count);
    count++;
}
do .. while문
코드블록을 무조건 한번 먼저 실행하고, 그다음에 조건식을 만나 평가합니다
let count = 0;
do {
    //do를 만나면 무조건 해당 코드블록을 실행하고
    console.log(count);
    count++;
} while (count < 3)
//그다음 만나는 while문의 조건문을 평가해서 반복합니다
let str = "hello world";
console.log(str.length);
// h str[0]
let l = "l";
let counter = 0;

//기본for
for (let i = 0; i < str.length; i++) {
    //문자열을 반복을 돌면서 l이라는 문자를 찾아서 
    //찾으면 counter의 숫자를 올려준다 
    if (str[i] === l) counter++
}
console.log(counter);
cf) continue문
for (let i = 0; i < str.length; i++) {
    //문자열을 반복을 돌면서 l이라는 문자를 찾아서 
    //찾으면 counter의 숫자를 올려준다 
    if (str[i] !== l) {
        continue;
        //l이 아니면 현시점에서 실행을 중단하고(밑의 코드는 무시)
        //다시 올라가서 증감식에 영향을받은 상태로 반복문진행
    }
    counter++; //continue가 실행되면 이구문은 무시됨
}
console.log(counter);


for in (객체를 반복하는데 특별한 반복문)
in연산자
객체 내에 특정 프로퍼티가 존재하는지의 여부를 확인하는 연산자입니다
그렇기 때문에 for in이 객체 특화 반복문이 될수 있는것입니다
const person = {
    name: "Oh",
    address: "부천",
    age: 20
}
//네임(key) in 대상객체
//대상객체에서 네임이 존재하는지 안하는지를 살펴보는것
//있으면 true, 없으면 false

console.log("name" in person);

for (const el in person) {
    //person객체에서 in의 연산자로 모든 이름(key)을 반복해서
    console.log(el + ":" + person[el]);
    //해당 이름 + : + 이름에 해당하는 값
}
//for of
객체타입중에 배열을 반복할때 특화된 반복문입니다


배열과 유사배열
배열 Array 라고 표시되며, 객체타입으로 인덱스로 탐색할 수 있습니다
유사배열은 배열은 아니지만 배열처럼 순서가 있는 요소가 있어
반복문에 사용할 수 있습니다
다만, 배열 메소드를 사용할 수 없습니다
배열메소드의 역할은 배열을 가지고, 추가 삭제, 고차원함수사용등을
할수있습니다
단순 반복문을 사용하려면 유사배열을 사용할 수있으나,
좀더 복잡하고 정교한 순서, 인덱스 접근을 위해서는 반드시 배열이
필요하다
그런데 DOM요소를 접근하려면 해당 태그나, 클래스등을 선택할때
유사배열로 밖에 컨트롤이 안됩니다
배열전환을 해줍니다
const arr = Array.from(lis)


forEach메서드, map 메서드
이 메서드는 배열의 메서드로 배열이어야지만 사용가능합니다
단, forEach 유사배열에도 사용이 가능합니다

forEach메서드는 배열이 각 요소에 대해 주어진 함수를 실행하는데
사용되는 메서드입니다 주로 각 요소를 반복하면서
어떤 작업을 수행하도록 합니다. 이 메서드는 (콜백함수)를
받아서 각 요소에 대해 순차적으로 호출하여 적용합니다
하지만 배열을 직접 변경하지는 않습니다

forEach는 반환값이 없고, 배열 내의 각 요소를 순회하며
콜백함수를 호출만 합니다

map메서드
배열의 각 요소를 반환해서 새로운 배열을 생성하는데 사용합니다
각 요소를 순회하며 주어진 콜백함수를 적용하고, 함수의 반환값을
새배열로 만들어 추가합니다
하지만 원본 배열은 변경되지 않습니다

결론
단순 반복문을 사용할 경우 map과 forEach를 구분하지 않습니다
하지만 배열이고, 배열메서드를 정교하게 사용하거나,
결과로 배열이 필요하면, 반드시 map을 사용해야합니다

*/
const nums = [1, 2, 3, 4, 5];
const doubleNums = nums.map(function (el, index) {
    return el * 2;
})




const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(el, index){
    console.log("각각의 요소" + ":" + "el", "인덱스" + ":" + "index")
})
//반복하고자 하는 배열이름.forEach(el, index){적용할 함수}
numbers.forEach(function(el, index){})

const person = {
    name: "Oh",
    address: "부천",
    age: 20
}
//네임(key) in 대상객체
//대상객체에서 네임이 존재하는지 안하는지를 살펴보는것
//있으면 true, 없으면 false

console.log("name" in person);

for (const el in person) {
    //person객체에서 in의 연산자로 모든 이름(key)을 반복해서
    console.log(el + ":" + person[el]);
    //해당 이름 + : + 이름에 해당하는 값
}
let lis = document.querySelectorAll("ul li");
const arr = Array.from(lis);
console.log(lis);
console.log(arr);
//  [li, li, li, li, li, li]
for (const el of lis) {
    el.onclick = function () {
        console.log("클릭");
    }
}

for (let i = 0; i <= 5; i++) {
    lis[i].onclick = function () {
        console.log("클릭");
    }
}





let str = "hello world";
console.log(str.length);
// h str[0]
let l = "l";
let counter = 0;

//기본for
for (let i = 0; i < str.length; i++) {
    //문자열을 반복을 돌면서 l이라는 문자를 찾아서 
    //찾으면 counter의 숫자를 올려준다 
    if (str[i] !== l) {
        continue;
        //l이 아니면 현시점에서 실행을 중단하고(밑의 코드는 무시)
        //다시 올라가서 증감식에 영향을받은 상태로 반복문진행
    }
    counter++; //continue가 실행되면 이구문은 무시됨
}
console.log(counter);

// for (let i = 1; i <= 6; i++) {
//     for (let j = 1; j <= 6; j++) {
//         if (i + j === 6) console.log(`[${i}, ${j}]`);
//     }
// }




let count = 0;
do {
    console.log(count);
    count++;
} while (count < 3)




//반복문을 사용하려면 반복할 내용이 있어야합니다
//따라서 반복문과 단짝은 배열과 객체입니다

// let lis = document.querySelectorAll("ul li");
// console.log(lis);

// //기본 for문
// for (let i = 0; i <= 5; i++) {
//     //반복할 기능, 문, 표현식등 반복하고자 하는 내용이 들어옵니다
// }
// let i = 0; // 변수선언문 혹은 할당문
// //변수선언과 변수의 시작지점을 알려주는 문
// i <= 5; //조건식 , 언제까지 반복할지를 알려주는 조건식
// i++ // 증감식 +1,혹은 -1 단계별로 반복하도록 하는 증감식

for (let i = 1; i <= 6; i++) {
    console.log(i);
}
//중첩 for문
//주사위 2개를 던져서 눈의 합이 6인 애들을 반복해서 구해주는 반복문
//property
for (let i = 1; i <= 6; i++) {
    for (let j = 1; j <= 6; j++) {
        if (i + j === 6) console.log(`[${i}, ${j}]`);
    }
}

//왜 반복문을 쓰는가??

// let lis = document.querySelectorAll("ul li");
// console.log(lis);
//  [li, li, li, li, li, li]

// lis[0].onclick = function () {
//     console.log("클릭");
// }
// lis[1].onclick = function () {
//     console.log("클릭");
// }
// lis[2].onclick = function () {
//     console.log("클릭");
// }
// lis[3].onclick = function () {
//     console.log("클릭");
// }
// lis[4].onclick = function () {
//     console.log("클릭");
// }
// lis[5].onclick = function () {
//     console.log("클릭");
// }

for (let i = 0; i <= 5; i++) {
    lis[i].onclick = function () {
        console.log("클릭");
    }
}