function displayName(name,txt){
     
    var age = 30;
    console.log(' It is  me ' +name+ ' I am ' +age+ ' I want to say ' +txt)

     ageCalculator(30); 

}
displayName('Md.Atikur Rahman','Hello there');


function ageCalculator(age){


    console.log('From another function ' +age);

}
console.log('.................................................')

function display(name){

        console.log('Function nested ' +name );

        return function quliFication(job){
           
                   console.log('Function as a Return ' + job);

        }

}
display('Md. Atikur Rahman')('Software Engineering');

function changeValue(a) {

    console.log('1  Value of a inside function before changing: ' + a);
    a = 10;
    console.log('2  Value of a inside function after changing: ' + a);
    return a;
}

var a = 100;
console.log('3  Value of a before changing function is applied: ' + a);
changeValue(a);
console.log('4 Value of a after changing function is applied: ' + a);



function clouserDemo(){

     var a = 10;


    return function(){
          
        var b = 20;
        var c = a + b ;
        console.log(c);

    }
}
//clouserDemo()();

var aVr= clouserDemo();
var total = aVr();
console.log(total);

function sEEmi(){

  console.log('working test');


}

sEEmi();


var faisal = function() {
    console.log('Today Faisal will come to my house');
}
faisal();


var friends = function() {
         console.log('Today another friend come to my house')
}
friends();

//Immediately Invoked Function Expressions (IIFE)

(function happy() {
    
    console.log('I am happy person');
})();

(function iiFeTest(){
  console.log('testing this project');


})(); 


var summation = (function() {
    
    console.log('I have come to win');

})();

var multi = (function (){

    let a = 20;
    let b =2 ;
    let c = a * b;
    console.log('Multiplications ' +c);
})();