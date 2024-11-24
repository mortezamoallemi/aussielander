function nowra_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20040;
var increase = Math.round(passed*6.43975982997587e-13*population);
document.getElementById("nowra_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(nowra_livepop, 500);
}
