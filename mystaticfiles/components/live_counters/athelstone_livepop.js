function athelstone_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9150;
var increase = Math.round(passed*-7.57874769828646e-14*population);
document.getElementById("athelstone_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(athelstone_livepop, 500);
}
