function maddington_orange_grove_martin_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13649;
var increase = Math.round(passed*9.24253128444792e-13*population);
document.getElementById("maddington_orange_grove_martin_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(maddington_orange_grove_martin_livepop, 500);
}
