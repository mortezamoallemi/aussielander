function koo_wee_rup_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7479;
var increase = Math.round(passed*8.60553969566152e-13*population);
document.getElementById("koo_wee_rup_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(koo_wee_rup_livepop, 500);
}
