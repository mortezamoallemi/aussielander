function newstead_bowen_hills_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10639;
var increase = Math.round(passed*2.40436925913868e-12*population);
document.getElementById("newstead_bowen_hills_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(newstead_bowen_hills_livepop, 500);
}
