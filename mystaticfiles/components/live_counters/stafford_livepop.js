function stafford_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6513;
var increase = Math.round(passed*4.77109452103376e-13*population);
document.getElementById("stafford_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(stafford_livepop, 500);
}
