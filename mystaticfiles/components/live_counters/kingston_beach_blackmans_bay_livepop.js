function kingston_beach_blackmans_bay_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10290;
var increase = Math.round(passed*3.47070741131451e-13*population);
document.getElementById("kingston_beach_blackmans_bay_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kingston_beach_blackmans_bay_livepop, 500);
}
