function makeLoadedDie(){
    var lists =[5,4,6,1,4,2,3,3,5];
    var counter = 0;
    return function(){
        return lists[counter++];
    }
}
var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie()); //5
console.log(rollLoadedDie()); //4

//
var anotherrollLoadedDie = makeLoadedDie();

console.log(anotherrollLoadedDie());
console.log(anotherrollLoadedDie());
console.log(anotherrollLoadedDie());
