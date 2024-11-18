function kingaroy_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10288;
var increase = Math.round(passed*3.02370851807997e-13*population);
document.getElementById("kingaroy_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kingaroy_livepop, 500);
}
