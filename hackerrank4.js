function factorial(n) {

    var i = 1;
    var fact = 1;
    for (i = 1; i <= n; i++) {

        fact = fact * i;



    }
    console.log(fact);

    return factorial;
}

factorial(4)