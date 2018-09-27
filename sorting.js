
var myarray =[1, 2, 5, 9 , 10]
myarray.sort(function(a,b){ //Array now becomes [7, 8, 25, 41]
    return a - b
});
console.log(myarray);

// Sort numerically and descending:

var myarray1 =[1, 2, 5, 9 , 10]
myarray.sort(function(a,b){ //Array now becomes [41, 25, 8, 7]
    return b - a
});
console.log(myarray1);

//Randomize the order of the array:
var myarray2 =[1, 2, 5, 9 , 10, "George", "John"]
myarray2.sort(function(){ //Array elements now scrambled
    return 0.5 - Math.random()
});

console.log(myarray2)