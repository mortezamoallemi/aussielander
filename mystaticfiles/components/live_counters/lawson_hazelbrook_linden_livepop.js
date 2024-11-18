function lawson_hazelbrook_linden_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11253;
var increase = Math.round(passed*9.76841058705704e-14*population);
document.getElementById("lawson_hazelbrook_linden_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lawson_hazelbrook_linden_livepop, 500);
}
