var drewName = 'Drew Choi';
var numArr = [1, 2, 3, 4];
var strArr = ['월', '화', '수'];
var commonObj = {};
var drewObj = {
    name: 'drew',
    age: 32,
    hobbies: ['aa', 'bb']
};
//null, undefined
var nullData = null;
var undefinedData = undefined;
//tuple
var tupleOne = [1, 'tetz', { isMember: false }];
//Enum
var MemberGrade;
(function (MemberGrade) {
    MemberGrade[MemberGrade["guest"] = 0] = "guest";
    MemberGrade[MemberGrade["user"] = 1] = "user";
    MemberGrade[MemberGrade["member"] = 2] = "member";
    MemberGrade[MemberGrade["admin"] = 3] = "admin";
})(MemberGrade || (MemberGrade = {}));
var userGrade = 1; // 백엔드에서 받아온 정보라고 가정
if (userGrade !== 3) {
    alert("관리자 권한이 없습니다!");
}
if (userGrade !== MemberGrade.admin) {
    alert("관리자 권한이 없습니다!");
}
//함수타입설정
var add3 = function (num1, num2) {
    return num1 + num2;
};
//never
function occurError(err) {
    throw new Error(err);
}
function infinite() {
    while (true)
        console.log("무한~~~ 도전!!");
}
var dontknow = 1;
var studentGrade = 'A';
var studentGradeArr = ['A', 'F', 'C'];
// '?'는 이건 정보가 없어도 괜찮다는 의미
var tetzInfo = {
    name: '이효석',
    id: 'xeo',
    age: 39,
    isMember: false,
};
var userData = [
    { name: 'lee', id: 'faker', age: 26, isMember: false },
    { name: 'ryu', id: 'keria', age: 20, isMember: false }
];
var userData2 = [
    { name: 'lee', id: 'faker', age: 26 },
    { name: 'ryu', id: 'keria', age: 20, isMember: false }
];
var tetz2 = {
    name: '이효석',
    id: 'xeo',
    age: 39,
    isMember: false,
    1: 'f',
    2: 'a'
};
var interfaceAdd = function (x, y) {
    return x + y;
};
interfaceAdd(1, 2);
//함수식에는 사용이 안된다.
//함수 선언문에서 사용(+화살표함수 등)
var sumResult = interfaceAdd(1, 3);
console.log(sumResult);
