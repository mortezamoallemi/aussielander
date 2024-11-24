function hurstbridge_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3451;
var increase = Math.round(passed*-1.09315405063603e-13*population);
document.getElementById("hurstbridge_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hurstbridge_livepop, 500);
}
