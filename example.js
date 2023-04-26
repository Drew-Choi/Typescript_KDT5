var array = [
    { name: "kim", age: 17, height: 182 },
    { name: "lee", age: 39, height: 172 },
    { name: "park", age: 21, height: 158 },
    { name: "choi", age: 33, height: 183 },
    { name: "jung", age: 26, height: 177 },
    { name: "kang", age: 22, height: 164 },
    { name: "cho", age: 28, height: 167 },
];
var result = function (arr) {
    var resultArr = [];
    arr.map(function (el, index) {
        if (el.age >= 25 && el.height >= 175) {
            resultArr.push(el.name);
        }
    });
    return resultArr;
};