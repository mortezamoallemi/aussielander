function melton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 59894;
var increase = Math.round(passed*1.44770461658243e-12*population);
document.getElementById("melton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(melton_livepop, 500);
}
