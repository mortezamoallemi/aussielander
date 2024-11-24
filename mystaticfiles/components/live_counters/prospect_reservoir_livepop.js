function prospect_reservoir_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 39;
var increase = Math.round(passed*6.05981383198526e-12*population);
document.getElementById("prospect_reservoir_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(prospect_reservoir_livepop, 500);
}
