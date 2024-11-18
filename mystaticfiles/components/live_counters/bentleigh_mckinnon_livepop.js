function bentleigh_mckinnon_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 22419;
var increase = Math.round(passed*4.49502889821943e-13*population);
document.getElementById("bentleigh_mckinnon_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bentleigh_mckinnon_livepop, 500);
}
