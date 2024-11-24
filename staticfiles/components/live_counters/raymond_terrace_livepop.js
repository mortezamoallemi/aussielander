function raymond_terrace_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13825;
var increase = Math.round(passed*4.09590551320657e-14*population);
document.getElementById("raymond_terrace_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(raymond_terrace_livepop, 500);
}
