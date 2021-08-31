function getSecondLargest(nums) {
    

    let lowestToHighest = nums.sort((a, b) => b - a);

    let secondLargestValue = lowestToHighest.slice(2, 3)

    let finalResult = secondLargestValue.toString()
 
    console.log(lowestToHighest);
    
    console.log(finalResult);





}


var x = ['2', '3', '6','6','5'];
getSecondLargest(x);
