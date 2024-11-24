function northmead_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20383;
var increase = Math.round(passed*1.0448151075656e-12*population);
document.getElementById("northmead_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(northmead_livepop, 500);
}
