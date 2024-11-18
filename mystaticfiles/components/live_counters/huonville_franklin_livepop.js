function huonville_franklin_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8310;
var increase = Math.round(passed*4.32645712332841e-13*population);
document.getElementById("huonville_franklin_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(huonville_franklin_livepop, 500);
}
