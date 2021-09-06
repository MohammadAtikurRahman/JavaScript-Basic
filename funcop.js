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