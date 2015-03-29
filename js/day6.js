function clock() 
{
    var date, hour, min, sec;
    date = new Date();
    hour = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();
    
//    if (hour < 10)
//    {
//        hour = '0'+hour;
//    }
//    if (min < 10)
//    {
//        min = '0'+min;
//    }
//    if (sec < 10)
//    {
//        sec = '0'+sec;
//    }
    
    if ((hour+'').length === 1)
    {
        hour = '0'+hour;
    }
    if ((min+'').length === 1)
    {
        min = '0'+min;
    }
    if ((sec+'').length === 1)
    {
        sec = '0'+sec;
    }
    
    document.title =  hour+':'+min+':'+sec;
    setTimeout(clock,1000)
}

clock();



function 구구단(num)
{
    for (i=1; i<=9; i++)
    {
        console.log(num+'*'+i+'='+num*i);
    } 
}
구구단(6);


function 구구단전부()
{
    var html = '<table>';
    for ( var 단수 = 2; 단수 <= 9; 단수++)
    {
        if ( 단수 === 3)
            {
                continue;
            }
        html += '<color=#999999>'+'<th>'+단수+'단'+'</th>'
    }
    for ( var i = 1; i <= 9; i++)
    {
        html += '<tr>'
        for ( 단수 = 2; 단수 <= 9; 단수++)
        {
            if ( 단수 === 3)
            {
                continue;
            }
            html += '<td>'+'&nbsp&nbsp'+단수+' x '+i+' = '+(단수*i)+'&nbsp&nbsp'+'</td>'
        }
        html += '</tr>'
    }
    html += '</table>';
    return html;
};

window.onload = function () {
    document.getElementById('box').innerHTML = 구구단전부();
}









function sum ()
{
    var total = 0
    for ( var i = 0; i < arguments.length; i++ )
    {   
        if (typeof arguments[i] === 'number' )
        {
            total += arguments[i];
        }
    }
    return total;
};

console.log(sum(1,5,'+',8));
console.log(sum(1,5,'+',8,10,20,40));



function push ()
{
    var 배열 = arguments[0];
    for ( i = 1; i < arguments.length; i++)
    {
        배열.push(arguments[i]);
    }
};

var arr = ['a','b'];
var rst = push(arr,1,2,3);
console.log(arr);
push(arr,1,2,3,4);
console.log(arr);




Array.prototype.max = function () {
    for ( i = 0; i < this.length; i++){
        var max = 0;
        if ( typeof this[i] != 'number'){
            continue;
        }
        if ( max < this[i] ) {
            max = this[i];
        }
    }
    return max;
}
console.log([1, 3, 5].max());
console.log([10, 3, '+', -2].max());




Date.prototype.ampm = function () {
    var hour = this.getHours();
    if (hour >= 12){
        console.log('오후');
    } else {
        console.log('오전');
    }
}

var date = new Date();
date.ampm();
var date = new Date (2015, 4, 12, 9);
date.ampm();




