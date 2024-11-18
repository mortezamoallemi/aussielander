function malmalling_reservoir_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11;
var increase = Math.round(passed*-3.12326537986932e-12*population);
document.getElementById("malmalling_reservoir_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(malmalling_reservoir_livepop, 500);
}
