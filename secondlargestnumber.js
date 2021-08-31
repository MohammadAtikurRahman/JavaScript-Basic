function getSecondLargest(nums) {


    for (var i = 0; i < nums.length; i++) {

        var maxmNumber =Math.max(...nums);
        console.log("first max number " +maxmNumber);

        var secondLargest;
        var maxmNumber1;


        if (maxmNumber >nums[i]) {                 

            secondLargest = nums[i];

          
            var maxmNumber1 = Math.max(...secondLargest);

            console.log("2nd maxnumber" + maxmNumber1);
             
          

        }

      

    }
    




}


var x = ['2', '3', '6', '6', '5', '200'];
getSecondLargest(x);
