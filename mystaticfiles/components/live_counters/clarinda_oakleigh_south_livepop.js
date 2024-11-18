function clarinda_oakleigh_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11653;
var increase = Math.round(passed*-5.44000582056378e-15*population);
document.getElementById("clarinda_oakleigh_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(clarinda_oakleigh_south_livepop, 500);
}
