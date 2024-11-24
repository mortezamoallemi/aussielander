function aurukun_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 1275;
var increase = Math.round(passed*-9.87095163693022e-14*population);
document.getElementById("aurukun_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(aurukun_livepop, 500);
}
