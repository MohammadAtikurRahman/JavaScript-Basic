function vowelsAndConsonants(str) {


    // console.log(`${str} ${str.length}`);

    var start1 ;

    var s;
    var s2 =1;
    var start2 = 1;
    //var i =0
     var track = str;
    
    const vowels = str.match(/[aeiou]/gi);
    const consonants = str.match(/[^aeiou]/gi);
   
    

    
    for (start1 = 0; start1 < vowels.length; start1++,start2++){


        var result1 = vowels.slice(start1,start2);
       
   
      
        console.log(result1);
        

      
    }
    for (s = 0; s < consonants.length; s++, s2++) {


      
        var result2 = consonants.slice(s, s2);


        console.log(result2);



    }
   


}

vowelsAndConsonants("javascriptloops");