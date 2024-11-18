function sutherland_kirrawee_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20874;
var increase = Math.round(passed*4.73917193590947e-13*population);
document.getElementById("sutherland_kirrawee_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(sutherland_kirrawee_livepop, 500);
}
