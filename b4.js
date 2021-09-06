//object should some property 
// array is object
// array is none primitive 
// array set the value by refrence 

var name = new Array('atik','tarek','annonna');
console.log(name) // this is not right precedure 

var name1 = [ 'seemi', "tasnim" , 'alam'];
console.log(name1);
var novel = ['upekkha' , 'himeu' , 'misir ali apni kothy'];
console.log(novel);
var food = ['burger','milkshake','pasta','pizza' , 'polaaoghosto'];
console.log(food)
var cycle = ['phonex','skforce','indiancycle'];
console.log(cycle);
var life = new Array('sadness','tension','love','family');
console.log(life);

var phone = new Array('samsung','nokia','motoroly','redmi4');
console.log(phone);

var glass = ['normal', 'glass', 'ok','ki','ak'];
console.log(glass);

var job =['akta','valo','job','amr','khub','dorkar', 'allah','amake','sahajjo','korun' ]
console.log(job)

glass[0] = 'atik';
job[4] = 'seemi'

phone[0]='we';

console.log(phone[0]);

console.log(job[4]);

console.log(glass[0]);


console.log(phone.length);
console.log(life.reverse());

console.log(food['length']);
for( var i = 0;  i < phone.length;i++ ){
      
    console.log('phone series '  +phone[i] );
}


var arrName = ['atik','seemi','tarek','anonna' , 'nishi'];


// string adding in the last index of array
//string removig in the las index of array
arrName.pop()
arrName.push('maa-baba')
 
for (var i = 0; i < arrName.length; i++) {
    console.log('Name: ' + arrName[i]);
}

// shift used when you want  to remove someting from 1st index then you have to apply it
novel.shift();
console.log(novel)

var bookOfeverything = ['lotr','got','kot','titaniceia','josnajonnnirgolpo'];
bookOfeverything.unshift('lordOftheRings');
// unshift used for when you someintg added in frist index of the array
console.log(bookOfeverything);
//how to see the index number then we have to use the index of function 

console.log( "index of job array " +job.indexOf('allah'))
console.log(arrName.indexOf('seemi'));
console.log(food.indexOf('pizza'));
job.push('try');
job.pop();
console.log(job)
console.log(arrName.indexOf('anonna'));

var movie = ['ddrj','lotr','mi6','f9','starwar','marvell','dcofthen'];
console.log(movie.indexOf('ddrj'));
movie.push('andhaja');
movie.unshift('lovethewayyoulife');
//now we have to slice used in the array operation so lets see it
console.log("slice operation is happend here so let it ");
 var fruits = ['jackfruits','mango' ,'orange','bananna','watermilon','dates','guava','pineaple'];
 //fruits.splice(0);
 // splice in the zero all have gone
 // splice in the 1 then 1 from to all gone
 console.log(fruits);

 fruits.splice(1,6);
 cycle.splice(0,1);
 console.log(fruits);
 console.log(cycle);














