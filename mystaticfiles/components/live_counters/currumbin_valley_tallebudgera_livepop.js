function currumbin_valley_tallebudgera_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7150;
var increase = Math.round(passed*3.01535914448281e-13*population);
document.getElementById("currumbin_valley_tallebudgera_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(currumbin_valley_tallebudgera_livepop, 500);
}
