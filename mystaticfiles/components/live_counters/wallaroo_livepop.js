function wallaroo_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4040;
var increase = Math.round(passed*6.03982275085797e-13*population);
document.getElementById("wallaroo_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wallaroo_livepop, 500);
}
