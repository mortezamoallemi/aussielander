function tamborine_canungra_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14272;
var increase = Math.round(passed*5.25055691066542e-13*population);
document.getElementById("tamborine_canungra_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(tamborine_canungra_livepop, 500);
}
