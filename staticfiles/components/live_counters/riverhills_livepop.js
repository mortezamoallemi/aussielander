function riverhills_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4043;
var increase = Math.round(passed*3.63142220668937e-13*population);
document.getElementById("riverhills_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(riverhills_livepop, 500);
}
