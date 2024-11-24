function wakerley_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8998;
var increase = Math.round(passed*9.03691370397998e-13*population);
document.getElementById("wakerley_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wakerley_livepop, 500);
}
