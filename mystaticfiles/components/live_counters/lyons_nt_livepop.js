function lyons_nt_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4799;
var increase = Math.round(passed*5.32044934721444e-12*population);
document.getElementById("lyons_nt_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lyons_nt_livepop, 500);
}
