function mosman_park_peppermint_grove_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10396;
var increase = Math.round(passed*1.67513342127352e-13*population);
document.getElementById("mosman_park_peppermint_grove_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mosman_park_peppermint_grove_livepop, 500);
}
