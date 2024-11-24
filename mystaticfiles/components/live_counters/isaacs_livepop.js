function isaacs_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2345;
var increase = Math.round(passed*-1.62060353861603e-14*population);
document.getElementById("isaacs_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(isaacs_livepop, 500);
}
