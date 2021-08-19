function factorial(n) {

    var i = 1;
    var fact = 1;
    for (i = 1; i <= n; i++) {

        fact = fact * i;



    }
    n = fact;
    return n;

}



function main() {
    const n = +(readLine());

    console.log(factorial(n));
}