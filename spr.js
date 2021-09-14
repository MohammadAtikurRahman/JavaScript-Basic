var numbers = [1, 2, 3, 4];

function calculate(a , b, c , d) {
    console.log('Sum: ' + (a + b + c + d));
}
//speard use korar maddhome amra arry k venge fellam 
calculate(...numbers);

var arr = ['atik','tarek','anonna','moin','imran'];
arr.unshift('mehidi');
console.log(arr)
arr.push('nishi');
console.log(arr);

var num1 = [0 , 1, 2, 3, 4 ,5];
var num2 = [6, 7 , 8 , 9 , 10];

num1 = num1.concat(num2);
console.log(num1);


num1 = [ ...num1,...num2];
console.log(num1)


