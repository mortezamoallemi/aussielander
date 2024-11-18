function lynbrook_lyndhurst_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15227;
var increase = Math.round(passed*1.68944406092814e-12*population);
document.getElementById("lynbrook_lyndhurst_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lynbrook_lyndhurst_livepop, 500);
}
