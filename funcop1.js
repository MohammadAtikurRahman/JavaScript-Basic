function displayText(text) {
    console.log(`welcome to the world of ${text}`);
    return function (version) { 
            console.log(`we should learn ${version}`);

    }
}
function atik(a) {
    console.log(a);
    return function tarek(b) {
        displayText('javascript')('ES6');
        var c = a + b;
        console.log(c);
    }
}
atik(10)(20);