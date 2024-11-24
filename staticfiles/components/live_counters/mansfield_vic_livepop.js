function mansfield_vic_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8843;
var increase = Math.round(passed*5.15222145565857e-13*population);
document.getElementById("mansfield_vic_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mansfield_vic_livepop, 500);
}
