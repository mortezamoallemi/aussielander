function brinsmead_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5364;
var increase = Math.round(passed*1.53171723565313e-13*population);
document.getElementById("brinsmead_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(brinsmead_livepop, 500);
}
