function hunters_hill_woolwich_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10341;
var increase = Math.round(passed*3.36251647594208e-13*population);
document.getElementById("hunters_hill_woolwich_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hunters_hill_woolwich_livepop, 500);
}
