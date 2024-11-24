function ettrema_sassafras_budawang_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 54;
var increase = Math.round(passed*2.06381532492788e-12*population);
document.getElementById("ettrema_sassafras_budawang_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ettrema_sassafras_budawang_livepop, 500);
}
