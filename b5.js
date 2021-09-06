var atik = {
    fullName: 'Md. Atikur Rahman',
    age: 30,
    address: 'dhaka',
    job: 'Software Engineer'
}

var seemi = {
    fullName: 'Seemi Tasnim Alam',
    age: 30,
    address: 'Dhaka',
    job: 'Asst. Professor'
}
var tarek = {
fullName: 'Md. Nazmul Ahsan',
   age: 30,
   address: 'Dhaka',
   job: 'Sr. Senior Software engineer'
}
var anonna ={
   fullName: 'Mst. Israt Jahan',
   age: 24,
   address: 'Pabna',
   job: 'Student'
}
console.log(atik);
console.log(seemi);
console.log(tarek);
console.log(anonna);
atik.zipCode = 3517;
atik.address='Mohammadpur';
console.log(atik.fullName);
console.log(tarek.job);
console.log(seemi.age);
console.log(atik.zipCode);
console.log(atik.address);
// object er moddhe function k rakhte chaile.. onek ta atik.zipcode er moto kore kisu akta rekha deo item hisbae
seemi.LoveText = function (){
    console.log('Do something best in the job');
}
seemi.LoveText();
atik.welcomeMsg = function(){
    console.log('Welcome to function as item in object.');
}
atik.welcomeMsg();
tarek.Jobmsg = function (){
         console.log('JavaScript is the key of sucess');
}
tarek.Jobmsg();
atik.EvenFinder = function(num){
       if(num%2==0){
            console.log('This is even Number');
        }
        else{
            console.log('This is Odd Number');
        }
}
atik.EvenFinder(5);
atik.addTwoNumber = function(a,b){
        var c = a + b;
        console.log('addition of two number ' +c);
}
atik.addTwoNumber(10,20);



seemi.factorialFind = function(nums){
        var mult = 1;
        for(var i = 1 ; i< nums ;  i++){

              mult = mult + i;
             


        }
         console.log(mult);
}
seemi.factorialFind(5);

atikur = {

    fullName: 'Md. Atikur Rahman',
    age: 30,
    address: 'Mohammadpur,Dhaka',
    zipCode: 1207,
    welcomeTxt: function(){
        
        console.log('Your Most Welcome!!');
    }



}
atikur.welcomeTxt();
