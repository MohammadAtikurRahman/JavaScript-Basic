function getSecondLargest(nums) {



    var secondLargest = [];
    var maxmNumber = [];
    var secondMaxmNumber = [];
    maxmNumber = Math.max(...nums);
    console.log("First Maxnumber " + maxmNumber);

 

    for (var i = 0; i < nums.length; i++) {

       if(maxmNumber > nums[i]){

           // console.log("max number for compare" +maxmNumber);
           // console.log("array number " +nums[i]) ;    

             secondMaxmNumber = Math.max(nums[i]);



       }



    }
      console.log(secondMaxmNumber);
   



}


var x = [1, 2, 34, 41, 510, 6];
getSecondLargest(x);
