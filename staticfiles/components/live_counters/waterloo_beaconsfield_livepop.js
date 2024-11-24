function waterloo_beaconsfield_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 33061;
var increase = Math.round(passed*2.85136201445755e-12*population);
document.getElementById("waterloo_beaconsfield_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(waterloo_beaconsfield_livepop, 500);
}
