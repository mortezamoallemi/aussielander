function murray_bridge_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17557;
var increase = Math.round(passed*3.15098899374409e-13*population);
document.getElementById("murray_bridge_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(murray_bridge_livepop, 500);
}
