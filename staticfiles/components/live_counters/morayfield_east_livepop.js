function morayfield_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8433;
var increase = Math.round(passed*1.03161734893913e-12*population);
document.getElementById("morayfield_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(morayfield_east_livepop, 500);
}
