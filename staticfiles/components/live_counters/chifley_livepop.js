function chifley_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2407;
var increase = Math.round(passed*-2.09906240969039e-13*population);
document.getElementById("chifley_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(chifley_livepop, 500);
}
