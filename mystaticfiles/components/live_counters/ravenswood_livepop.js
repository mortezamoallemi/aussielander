function ravenswood_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3627;
var increase = Math.round(passed*-5.81043174819444e-13*population);
document.getElementById("ravenswood_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ravenswood_livepop, 500);
}
