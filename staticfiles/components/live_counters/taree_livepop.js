function taree_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 25854;
var increase = Math.round(passed*1.07113925489229e-13*population);
document.getElementById("taree_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(taree_livepop, 500);
}
