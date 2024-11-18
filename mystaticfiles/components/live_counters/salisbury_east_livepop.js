function salisbury_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17533;
var increase = Math.round(passed*1.41182066788921e-13*population);
document.getElementById("salisbury_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(salisbury_east_livepop, 500);
}
