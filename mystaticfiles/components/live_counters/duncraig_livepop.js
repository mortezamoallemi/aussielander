function duncraig_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15272;
var increase = Math.round(passed*1.04253718563927e-13*population);
document.getElementById("duncraig_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(duncraig_livepop, 500);
}
