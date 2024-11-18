function clifton_springs_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13348;
var increase = Math.round(passed*8.3627088295068e-13*population);
document.getElementById("clifton_springs_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(clifton_springs_livepop, 500);
}
