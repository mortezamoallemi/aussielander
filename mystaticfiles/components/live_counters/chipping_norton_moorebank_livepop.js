function chipping_norton_moorebank_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18748;
var increase = Math.round(passed*1.14464976986488e-12*population);
document.getElementById("chipping_norton_moorebank_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(chipping_norton_moorebank_livepop, 500);
}
