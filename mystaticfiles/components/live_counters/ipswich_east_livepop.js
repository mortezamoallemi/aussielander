function ipswich_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17893;
var increase = Math.round(passed*3.8164395939945e-13*population);
document.getElementById("ipswich_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ipswich_east_livepop, 500);
}
