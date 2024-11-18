function carindale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15706;
var increase = Math.round(passed*5.92293645512269e-14*population);
document.getElementById("carindale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(carindale_livepop, 500);
}
