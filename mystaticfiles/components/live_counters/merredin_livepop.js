function merredin_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5088;
var increase = Math.round(passed*2.24759540507948e-14*population);
document.getElementById("merredin_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(merredin_livepop, 500);
}
