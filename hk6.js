function getGrade(score) {
    let grade;
    // Write your code here

    if(25<score && score <=30){

        console.log("Grade A");
    }
    if (20 < score && score <= 25) {

        console.log("Grade B");
    }
    if (15 < score && score <= 20) {

        console.log("Grade C");
    }
    if (10 < score && score <= 15) {

        console.log("Grade D");
    }

    if (5 < score && score <= 10) {

        console.log("Grade E");
    }
    if (0 <= score && score <= 5) {

        console.log("Grade F");
    }






    return grade;
}
getGrade(26);