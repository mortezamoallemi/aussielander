function blackwood_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11992;
var increase = Math.round(passed*4.1748542808638e-13*population);
document.getElementById("blackwood_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(blackwood_livepop, 500);
}
