function rosebud_mccrae_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20944;
var increase = Math.round(passed*4.13500909603913e-13*population);
document.getElementById("rosebud_mccrae_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(rosebud_mccrae_livepop, 500);
}
