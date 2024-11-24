function corrimal_tarrawanna_bellambi_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15421;
var increase = Math.round(passed*1.40129613644144e-13*population);
document.getElementById("corrimal_tarrawanna_bellambi_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(corrimal_tarrawanna_bellambi_livepop, 500);
}
