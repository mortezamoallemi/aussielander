function flagstaff_hill_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10527;
var increase = Math.round(passed*5.68843593566429e-14*population);
document.getElementById("flagstaff_hill_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(flagstaff_hill_livepop, 500);
}
