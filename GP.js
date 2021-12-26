var a = 2; 
a=parseInt(a);
var r = 3; 
r=parseInt(r);
var n = 5;
n=parseInt(n);

var curr_term;
    for (var i = 0; i < n; i++) {
        curr_term = a * Math.pow(r, i);
        console.log(curr_term + " ");
    }