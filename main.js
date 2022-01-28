function manipulateArray(array, functionality) {
    var result = [];
    for (let i = 0; i < array.length; i++) {
      var y = functionality(array[i]);
      result.push(y);
    }
    return result;
  }  
  var mulBy4 = function (n) {
     return n * 4;
   };
   
   function add9(n) {
     return n + 9;
   }
   var x = [1, 2, 3, 4];
    var sim = manipulateArray(x,mulBy4);
    var sim2 = manipulateArray(x,add9);
   document.write(sim);
document.write("<br/>");
   document.write(sim2);