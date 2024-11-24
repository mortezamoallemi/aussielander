function norwood_sa_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10066;
var increase = Math.round(passed*1.90586450696123e-13*population);
document.getElementById("norwood_sa_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(norwood_sa_livepop, 500);
}
