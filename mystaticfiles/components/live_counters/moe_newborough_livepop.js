function moe_newborough_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16550;
var increase = Math.round(passed*-4.7720002401164e-14*population);
document.getElementById("moe_newborough_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(moe_newborough_livepop, 500);
}
