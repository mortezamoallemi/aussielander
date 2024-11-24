function dingley_village_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10286;
var increase = Math.round(passed*7.25511830525369e-14*population);
document.getElementById("dingley_village_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(dingley_village_livepop, 500);
}
