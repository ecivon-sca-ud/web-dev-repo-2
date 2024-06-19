//For indexprime.js
/*
    Behold, a shockingly simple way to make a counter program 
    without kawa iterative structures!!!
*/
let currentValue= document.getElementById("p3");
let count=0;
document.getElementById("bonyeza").onclick= function() {
    count--;
    currentValue.textContent = count;
}
document.getElementById("finya").onclick= function() {
    count=0;
    currentValue.textContent = count;
}
document.getElementById("tumia").onclick= function() {
    count++;
    currentValue.textContent = count;
}
