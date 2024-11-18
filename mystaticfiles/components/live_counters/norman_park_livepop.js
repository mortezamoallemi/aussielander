function norman_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6302;
var increase = Math.round(passed*3.10381286959076e-13*population);
document.getElementById("norman_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(norman_park_livepop, 500);
}
