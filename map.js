const map1 = new Map();

map1.set('atik',30);
map1.set('tarek',30);
map1.set('anonna',25);
map1.set('moin' , 19);

map1.set('shadman',27);

var a = map1.get('atik');
var b = map1.get('tarek');
var c = map1.get('anonna');
var d = map1.get('moin')
map1.set('atik' , 28);
var a = map1.get('atik');

var x= map1.size;



console.log(a);
console.log(b);
console.log(c);
console.log(d);

map1.delete('shadman');
var y=  map1.get('shadman');

console.log("Y the value of " +y);
console.log("the size of the map " +x);