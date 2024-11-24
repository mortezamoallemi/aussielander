function springwood_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9278;
var increase = Math.round(passed*1.99276568537012e-13*population);
document.getElementById("springwood_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(springwood_livepop, 500);
}
