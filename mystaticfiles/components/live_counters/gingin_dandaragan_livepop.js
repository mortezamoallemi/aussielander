function gingin_dandaragan_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8432;
var increase = Math.round(passed*4.36636685937934e-13*population);
document.getElementById("gingin_dandaragan_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(gingin_dandaragan_livepop, 500);
}
