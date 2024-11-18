function westbury_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4024;
var increase = Math.round(passed*1.03278568451576e-13*population);
document.getElementById("westbury_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(westbury_livepop, 500);
}
