function seaford_vic_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16462;
var increase = Math.round(passed*1.67463193453526e-13*population);
document.getElementById("seaford_vic_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(seaford_vic_livepop, 500);
}
