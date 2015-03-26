function age(y, m, d) {
    var today = new Date();
    var thisYear = today.getFullYear();
    var years = thisYear - y;
    if ( m >= today.getMonth && d >= today.getDate) {
        return years + 1 ;
    } else {
        return years
    };
}
console.log(age(1979, 7, 18));



function 연령대 (y, m, d) {
    var age = window.age(y, m, d);
    if (age<10){
        return '어린이';
    } else if (age<19){
        return '청소년';
    } else if (age<40){
        return '청년';
    } else {
        return '장년이상';
    }
}
console.log(연령대(1979, 7, 18));
