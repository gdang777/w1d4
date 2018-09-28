array.foreach(function findWaldo(arr, found) {
     if (arr[i] === "Waldo") {
      found(i);   // execute callback
     }
  });

function actionWhenFound(i) {
    var index = i;
  console.log("found Waldo at index  " + index) ;
}
var array = ["Alice", "Bob","Waldo", "Winston" ];
findWaldo(array, actionWhenFound);