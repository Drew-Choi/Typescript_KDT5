interface Individual {
  name: string;
  age?: number;
  height?: number
}

interface Result {
  (arr: Array<Individual>): Array<nameT>
}

type nameT = string;

const array: Individual[] = [
  { name: "kim", age: 17, height: 182 },
  { name: "lee", age: 39, height: 172 },
  { name: "park", age: 21, height: 158 },
  { name: "choi", age: 33, height: 183 },
  { name: "jung", age: 26, height: 177 },
  { name: "kang", age: 22, height: 164 },
  { name: "cho", age: 28, height: 167 },
  ];

const result: Result = (arr) => {
  let resultArr: nameT[] = [];

  arr.map((el: Individual)=> {
    if (el.age >= 25 && el.height >= 175) {
      resultArr.push(el.name)
    }
  })
  return resultArr;
}

console.log(result(array));
