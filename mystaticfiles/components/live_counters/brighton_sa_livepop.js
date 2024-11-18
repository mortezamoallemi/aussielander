function brighton_sa_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13830;
var increase = Math.round(passed*1.99840275485639e-13*population);
document.getElementById("brighton_sa_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(brighton_sa_livepop, 500);
}
