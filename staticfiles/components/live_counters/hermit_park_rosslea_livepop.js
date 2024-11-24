function hermit_park_rosslea_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5151;
var increase = Math.round(passed*3.33300770482015e-14*population);
document.getElementById("hermit_park_rosslea_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hermit_park_rosslea_livepop, 500);
}
