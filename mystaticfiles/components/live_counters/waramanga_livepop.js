function waramanga_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2627;
var increase = Math.round(passed*7.52835607658498e-14*population);
document.getElementById("waramanga_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(waramanga_livepop, 500);
}
