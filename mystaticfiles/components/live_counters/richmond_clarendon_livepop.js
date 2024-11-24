function richmond_clarendon_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13839;
var increase = Math.round(passed*1.85064409911097e-13*population);
document.getElementById("richmond_clarendon_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(richmond_clarendon_livepop, 500);
}
