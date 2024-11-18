function winston_hills_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10774;
var increase = Math.round(passed*2.44217021292281e-13*population);
document.getElementById("winston_hills_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(winston_hills_livepop, 500);
}
