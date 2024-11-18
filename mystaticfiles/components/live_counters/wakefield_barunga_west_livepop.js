function wakefield_barunga_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9450;
var increase = Math.round(passed*1.7279385213544e-13*population);
document.getElementById("wakefield_barunga_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wakefield_barunga_west_livepop, 500);
}
