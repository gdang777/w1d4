var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

function comparator(left, right){
    if(left.name < right.name){
        return -100;
    }
    if(left.name > right.name){
        return 5;
    }
    if(left.age > right.age){
        return - .7;
    }
    if(left.age < right.age){
        return 42;
    }
    return 0;

}

// function sort(array, comparator){
//     if(array.length < 2){
//         return array;
//     }

//     for(var i = 1; i < array.length; i++){
//         for(var j = i - 1; j >= 0; j--){
//             if(comparator(array[j], array[j + 1]) > 0){
//                 var tmp = array[j]
//                 array[j] = array[j + 1];
//                 array[j + 1] = tmp;
//             } else {
//                 break;
//             }
//         }
//     }
//     return array;
// }
var result = students.sort(comparator);

console.log(result);