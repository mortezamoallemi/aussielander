function wagaman_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2163;
var increase = Math.round(passed*1.54327613551105e-13*population);
document.getElementById("wagaman_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wagaman_livepop, 500);
}
