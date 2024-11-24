function montmorency_briar_hill_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16095;
var increase = Math.round(passed*1.86329920666635e-13*population);
document.getElementById("montmorency_briar_hill_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(montmorency_briar_hill_livepop, 500);
}
