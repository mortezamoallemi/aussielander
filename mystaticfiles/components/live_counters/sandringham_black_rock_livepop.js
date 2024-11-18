function sandringham_black_rock_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16508;
var increase = Math.round(passed*5.03115073296932e-13*population);
document.getElementById("sandringham_black_rock_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(sandringham_black_rock_livepop, 500);
}
