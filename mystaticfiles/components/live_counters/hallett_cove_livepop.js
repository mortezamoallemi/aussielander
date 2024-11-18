function hallett_cove_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12394;
var increase = Math.round(passed*7.04926571593582e-14*population);
document.getElementById("hallett_cove_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hallett_cove_livepop, 500);
}
