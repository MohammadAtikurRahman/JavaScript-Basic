function getSecondLargest(nums) {



    var secondLargest = [];
    var maxmNumber= [];
    var secondMaxmNumber = [];
    maxmNumber = Math.max(...nums);
    console.log("First Maxnumber " + maxmNumber);



    for (var i = 0; i < nums.length; i++) {

       
        
     

        if (maxmNumber > nums[i]) {

           secondLargest = nums[i];

            var b = secondLargest.split(',').map(function (item) {
                return parseInt(item, 10);
            });
          

         
            
           

        }

    

    }
  secondMaxmNumber = Math.max(...b);
  console.log("Second Maxnumber " +secondMaxmNumber);

    
}


var x = ['1', '2', '34', '41', '510', '6'];
getSecondLargest(x);
