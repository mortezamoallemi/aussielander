function isabella_plains_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4403;
var increase = Math.round(passed*1.28036543875098e-13*population);
document.getElementById("isabella_plains_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(isabella_plains_livepop, 500);
}
