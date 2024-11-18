function bridgeman_downs_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8145;
var increase = Math.round(passed*4.08418227725528e-13*population);
document.getElementById("bridgeman_downs_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bridgeman_downs_livepop, 500);
}
