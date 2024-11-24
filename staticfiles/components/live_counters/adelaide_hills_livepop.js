function adelaide_hills_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6830;
var increase = Math.round(passed*-4.64102354905016e-15*population);
document.getElementById("adelaide_hills_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(adelaide_hills_livepop, 500);
}
