function condobolin_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6637;
var increase = Math.round(passed*-2.39099850975997e-13*population);
document.getElementById("condobolin_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(condobolin_livepop, 500);
}
