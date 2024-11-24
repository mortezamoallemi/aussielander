function edensor_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9772;
var increase = Math.round(passed*2.1921089065249e-13*population);
document.getElementById("edensor_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(edensor_park_livepop, 500);
}
