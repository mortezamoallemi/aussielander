function landsborough_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10140;
var increase = Math.round(passed*4.2282452249903e-13*population);
document.getElementById("landsborough_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(landsborough_livepop, 500);
}
