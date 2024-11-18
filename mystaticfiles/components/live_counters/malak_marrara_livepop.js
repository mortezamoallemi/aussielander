function malak_marrara_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4550;
var increase = Math.round(passed*-2.80820306098912e-13*population);
document.getElementById("malak_marrara_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(malak_marrara_livepop, 500);
}
