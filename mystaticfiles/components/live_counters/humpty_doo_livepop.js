function humpty_doo_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8706;
var increase = Math.round(passed*6.97722747220604e-13*population);
document.getElementById("humpty_doo_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(humpty_doo_livepop, 500);
}
