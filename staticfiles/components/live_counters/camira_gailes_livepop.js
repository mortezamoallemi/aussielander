function camira_gailes_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9238;
var increase = Math.round(passed*1.40213174801223e-13*population);
document.getElementById("camira_gailes_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(camira_gailes_livepop, 500);
}
