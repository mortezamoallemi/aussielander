function outback_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2637;
var increase = Math.round(passed*-1.68772336024983e-12*population);
document.getElementById("outback_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(outback_livepop, 500);
}
