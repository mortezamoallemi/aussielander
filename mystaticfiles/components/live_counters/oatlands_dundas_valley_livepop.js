function oatlands_dundas_valley_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17788;
var increase = Math.round(passed*7.66480536555331e-13*population);
document.getElementById("oatlands_dundas_valley_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(oatlands_dundas_valley_livepop, 500);
}
