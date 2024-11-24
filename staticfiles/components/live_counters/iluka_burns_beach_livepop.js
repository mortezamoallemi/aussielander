function iluka_burns_beach_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8638;
var increase = Math.round(passed*2.14006314739117e-12*population);
document.getElementById("iluka_burns_beach_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(iluka_burns_beach_livepop, 500);
}
