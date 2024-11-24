function mooroolbark_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 22057;
var increase = Math.round(passed*4.05448939073991e-13*population);
document.getElementById("mooroolbark_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mooroolbark_livepop, 500);
}
