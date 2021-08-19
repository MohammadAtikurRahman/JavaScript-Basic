function getArea(length, width) {
    let area;
    // Write your code here
    area = length * width;
    console.log(area);
    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = 2 * (length + width);
    console.log(perimeter);

    return perimeter;
}
getArea(3, 4.5);
getPerimeter(3, 4.5);