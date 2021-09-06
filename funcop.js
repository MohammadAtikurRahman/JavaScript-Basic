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
    console.log('Value of a inside function before changing: ' + a);
    a = 10;
    console.log('Value of a inside function after changing: ' + a);
    return a;
}

var a = 100;
console.log('Value of a before changing function is applied: ' + a);
changeValue(a);
console.log('Value of a after changing function is applied: ' + a);