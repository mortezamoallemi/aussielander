function bonython_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3783;
var increase = Math.round(passed*-8.98875292613089e-14*population);
document.getElementById("bonython_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bonython_livepop, 500);
}
