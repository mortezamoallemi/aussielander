function ormiston_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5795;
var increase = Math.round(passed*1.73064002832763e-13*population);
document.getElementById("ormiston_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ormiston_livepop, 500);
}
