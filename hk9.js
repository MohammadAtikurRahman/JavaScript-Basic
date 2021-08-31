function getSecondLargest(nums) {
    

    let lowestToHighest = nums.sort((a, b) => b - a);

    let secondLargestValue = lowestToHighest.slice(1, 2)

    let finalResult = secondLargestValue.toString()
   
    
    console.log(finalResult);





}


var x = ['2', '3', '6','6','5','200','19'];
getSecondLargest(x);
