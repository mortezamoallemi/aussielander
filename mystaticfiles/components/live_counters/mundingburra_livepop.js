function mundingburra_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3625;
var increase = Math.round(passed*-4.29497083657991e-13*population);
document.getElementById("mundingburra_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mundingburra_livepop, 500);
}
