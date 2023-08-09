/*
나이와 성별의 조건에 따라 호칭을 정하는 조건문을 만들어봅시다

*/

let myAge = prompt("당신의 나이는?", "숫자만입력");
let myGender =
    prompt("당신의 성별은?", "남성이면 male이라고 적어주세요");

let yourAge = prompt("호칭을 알고 싶은 사람의 나이는?", "숫자만입력");
let yourGender =
    prompt("호칭을 알고 싶은 사람의 성별은?", "남성이면 male이라고 적어주세요");

let callOB = "형";
let callOS = "누나";
let callF = "친구";
let callYB = "남동생";
let callYS = "여동생";

function whatShouldICallYou(yourAge, yourGender) {
    if (myAge === yourAge) {
        return callF;
    } else if (myAge > yourAge) {
        if (myGender === yourGender) {
            return callYB;
        } else {
            return callYS;
        }
    } else if (myAge < yourAge) {
        if (myGender === yourGender) {
            return callOB;
        } else {
            return callOS;
        }
    }
}

let result = whatShouldICallYou(yourAge, yourGender);
console.log(result);