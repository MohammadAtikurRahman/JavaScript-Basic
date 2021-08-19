function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const r = +(readLine());
    // Print the area of the circle:

    // Print the perimeter of the circle:



    //var r =2.6;
    var area = Math.PI * (r * r);
    var perimeter = 2 * Math.PI * r;
    console.log(area);
    console.log(perimeter);

    try {
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch (error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}