function cobram_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6345;
var increase = Math.round(passed*1.03795391411487e-13*population);
document.getElementById("cobram_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cobram_livepop, 500);
}
