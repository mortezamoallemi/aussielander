function broadbeach_waters_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7775;
var increase = Math.round(passed*1.99691456084782e-13*population);
document.getElementById("broadbeach_waters_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(broadbeach_waters_livepop, 500);
}
