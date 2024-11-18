function salisbury_nathan_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7183;
var increase = Math.round(passed*2.56562801613299e-14*population);
document.getElementById("salisbury_nathan_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(salisbury_nathan_livepop, 500);
}
