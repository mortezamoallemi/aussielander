function giralang_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3312;
var increase = Math.round(passed*1.72570402990905e-14*population);
document.getElementById("giralang_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(giralang_livepop, 500);
}
