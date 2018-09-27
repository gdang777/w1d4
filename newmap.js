
var newArray = ["John", "James" , "Adam", "Sam", "Bob"];

function map(array, cbfunc){
    var newerArray = [];
    array.forEach(function(word){
        newerArray.push(cbfunc(word))
    })

    return newerArray
}

console.log(map(newArray, function(word){
    return word.toLowerCase();
}));



// var cb = function(word) {
//   return word.length;
// }
//  var cd = function(word){
//     return (word + "s");
//  }
// console.log(map(newArray, cd));
// console.log(map(newArray, cd));

// console.log(map(newArray, function(word) {
//   return word.toUpperCase();
// }))
