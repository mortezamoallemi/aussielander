function balgowlah_clontarf_seaforth_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20188;
var increase = Math.round(passed*3.23845118745657e-13*population);
document.getElementById("balgowlah_clontarf_seaforth_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(balgowlah_clontarf_seaforth_livepop, 500);
}
