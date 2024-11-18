function parmelia_orelia_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10963;
var increase = Math.round(passed*7.15561306500685e-14*population);
document.getElementById("parmelia_orelia_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(parmelia_orelia_livepop, 500);
}
