function latham_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3637;
var increase = Math.round(passed*5.95657929914758e-14*population);
document.getElementById("latham_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(latham_livepop, 500);
}
