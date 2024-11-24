function warragul_drouin_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 34968;
var increase = Math.round(passed*9.83241995468583e-13*population);
document.getElementById("warragul_drouin_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(warragul_drouin_livepop, 500);
}
