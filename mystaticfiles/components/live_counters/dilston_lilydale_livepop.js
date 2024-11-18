function dilston_lilydale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3947;
var increase = Math.round(passed*2.57607194380192e-14*population);
document.getElementById("dilston_lilydale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(dilston_lilydale_livepop, 500);
}
