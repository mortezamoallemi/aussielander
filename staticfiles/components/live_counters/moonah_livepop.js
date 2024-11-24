function moonah_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5284;
var increase = Math.round(passed*1.91290549584699e-13*population);
document.getElementById("moonah_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(moonah_livepop, 500);
}
