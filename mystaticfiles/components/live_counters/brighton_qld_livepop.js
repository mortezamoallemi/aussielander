function brighton_qld_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9476;
var increase = Math.round(passed*3.19103456644082e-13*population);
document.getElementById("brighton_qld_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(brighton_qld_livepop, 500);
}
