function white_rock_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4729;
var increase = Math.round(passed*3.27488391401179e-13*population);
document.getElementById("white_rock_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(white_rock_livepop, 500);
}
