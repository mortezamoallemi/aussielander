function dromana_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11024;
var increase = Math.round(passed*1.27590599705747e-12*population);
document.getElementById("dromana_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(dromana_livepop, 500);
}
