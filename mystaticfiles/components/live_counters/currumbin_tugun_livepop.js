function currumbin_tugun_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11313;
var increase = Math.round(passed*5.21470513819818e-13*population);
document.getElementById("currumbin_tugun_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(currumbin_tugun_livepop, 500);
}
