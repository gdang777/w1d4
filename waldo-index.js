function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(i) {
    var index = i;
  console.log("found Waldo at index  " + index) ;
}

findWaldo(["Alice", "Bob","Waldo", "Winston", ], actionWhenFound);
