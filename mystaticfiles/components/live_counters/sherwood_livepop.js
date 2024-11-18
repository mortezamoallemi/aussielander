function sherwood_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5637;
var increase = Math.round(passed*4.57107859279411e-13*population);
document.getElementById("sherwood_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(sherwood_livepop, 500);
}
