function melbourne_airport_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 184;
var increase = Math.round(passed*1.73321496067784e-12*population);
document.getElementById("melbourne_airport_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(melbourne_airport_livepop, 500);
}
