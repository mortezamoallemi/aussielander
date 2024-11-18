function morphett_vale_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13600;
var increase = Math.round(passed*6.98651700631773e-14*population);
document.getElementById("morphett_vale_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(morphett_vale_east_livepop, 500);
}
