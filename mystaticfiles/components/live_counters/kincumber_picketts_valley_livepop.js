function kincumber_picketts_valley_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7308;
var increase = Math.round(passed*1.74197074458465e-13*population);
document.getElementById("kincumber_picketts_valley_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kincumber_picketts_valley_livepop, 500);
}
