function getSecondLargest(nums) {
    

//    for (var i = 0; i < nums.length; i++) {
     
//     //  let maxmNumber = Math.max(...nums);
 






     



//     }

    let lowestToHighest = nums.sort((a, b) => b - a);

    let secondLargestValue = lowestToHighest.slice(1, 2)


    console.log(lowestToHighest);
    console.log(secondLargestValue);





}


var x = ['2', '3', '6','6','5','200','19'];
getSecondLargest(x);
