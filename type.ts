let drewName: string = 'Drew Choi'
let numArr: number[] = [1, 2, 3, 4]
let strArr: Array<string> = ['월', '화', '수']
let commonObj: object = {};
let drewObj: {name: string; age: number; hobbies: string[]} = {
  name: 'drew',
  age: 32,
  hobbies: ['aa', 'bb']
}

//null, undefined
let nullData: null = null
let undefinedData: undefined = undefined;

//tuple
let tupleOne: [number, string, object] = [1, 'tetz', {isMember: false}]

//Enum
enum MemberGrade {
  guest = 0,
  user = 1,
  member = 2,
  admin = 3,
}

let userGrade: number = 1; // 백엔드에서 받아온 정보라고 가정
if (userGrade !== 3) { alert("관리자 권한이 없습니다!");
}
if (userGrade !== MemberGrade.admin) { alert("관리자 권한이 없습니다!");
}

//함수타입설정
const add3 = (num1: number, num2: number): number => {
  return num1 + num2
}

//never
function occurError(err: string): never {
  throw new Error(err);
}

function infinite():never {
  while(true) console.log("무한~~~ 도전!!");
}


//Type 사용하기
type numOrStr = string | number;
let dontknow: numOrStr = 1;
type grade = 'A' | 'B' | 'C' | 'D' | 'F';
let studentGrade: grade = 'A';
let studentGradeArr: grade[] = ['A', 'F', 'C']


//Interface사용하기
interface User {
  name: string;
  id: string;
  age: number;
  isMember: boolean;
}

interface User2 {
  name: string;
  id: string;
  age: number;
  isMember?: boolean;
}
// '?'는 이건 정보가 없어도 괜찮다는 의미

let tetzInfo: User = {
  name: '이효석',
  id: 'xeo',
  age: 39,
  isMember: false,
}

let userData: Array<User> = [
  {name: 'lee', id:'faker', age: 26, isMember: false},
  {name: 'ryu', id:'keria', age: 20, isMember: false}
]

let userData2: Array<User2> = [
  {name: 'lee', id:'faker', age: 26},
  {name: 'ryu', id:'keria', age: 20, isMember: false}
]

//interface, addtional사용
interface User3 {
  name: string;
  id: string;
  age: number;
  isMember: boolean;
  [additional: number]: string;
}

let tetz2: User3 = {
  name: '이효석',
  id: 'xeo',
  age: 39,
  isMember: false,
  1: 'f',
  2: 'a'
}

//interface 함수 적용
interface Add {
  (num1: number, num2: number): number;
}

const interfaceAdd: Add = (x, y) => {
  return x + y
}

interfaceAdd(1, 2)
//함수식에는 사용이 안된다.
//함수 선언문에서 사용(+화살표함수 등)

const sumResult: number = interfaceAdd(1,3)
console.log(sumResult);
