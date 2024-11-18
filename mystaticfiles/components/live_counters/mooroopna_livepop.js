function mooroopna_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7937;
var increase = Math.round(passed*1.01486386863129e-13*population);
document.getElementById("mooroopna_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mooroopna_livepop, 500);
}
