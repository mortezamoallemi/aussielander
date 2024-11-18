function skye_sandhurst_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13078;
var increase = Math.round(passed*1.3622879833651e-12*population);
document.getElementById("skye_sandhurst_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(skye_sandhurst_livepop, 500);
}
