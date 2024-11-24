function wickham_carrington_tighes_hill_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8003;
var increase = Math.round(passed*2.72013361289649e-13*population);
document.getElementById("wickham_carrington_tighes_hill_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wickham_carrington_tighes_hill_livepop, 500);
}
