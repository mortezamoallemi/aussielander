function belmont_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14025;
var increase = Math.round(passed*1.87230081597678e-13*population);
document.getElementById("belmont_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(belmont_livepop, 500);
}
