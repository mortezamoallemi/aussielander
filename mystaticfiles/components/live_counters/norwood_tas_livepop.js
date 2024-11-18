function norwood_tas_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3884;
var increase = Math.round(passed*1.48685178312127e-13*population);
document.getElementById("norwood_tas_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(norwood_tas_livepop, 500);
}
