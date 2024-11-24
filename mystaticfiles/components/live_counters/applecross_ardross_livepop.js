function applecross_ardross_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11037;
var increase = Math.round(passed*2.4127061123964e-13*population);
document.getElementById("applecross_ardross_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(applecross_ardross_livepop, 500);
}
