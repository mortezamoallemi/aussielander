function toowong_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10803;
var increase = Math.round(passed*1.79815972926125e-13*population);
document.getElementById("toowong_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(toowong_livepop, 500);
}
