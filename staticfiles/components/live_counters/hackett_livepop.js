function hackett_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2996;
var increase = Math.round(passed*1.78174706225745e-13*population);
document.getElementById("hackett_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hackett_livepop, 500);
}