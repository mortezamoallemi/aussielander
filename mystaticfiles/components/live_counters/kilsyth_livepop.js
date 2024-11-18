function kilsyth_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9180;
var increase = Math.round(passed*4.64996300772713e-13*population);
document.getElementById("kilsyth_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kilsyth_livepop, 500);
}
