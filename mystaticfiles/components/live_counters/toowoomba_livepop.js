function toowoomba_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 130718;
var increase = Math.round(passed*1.33025235790403e-12*population);
document.getElementById("toowoomba_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(toowoomba_livepop, 500);
}
