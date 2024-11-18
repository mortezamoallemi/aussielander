function pyrmont_ultimo_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 21655;
var increase = Math.round(passed*9.19942093815543e-13*population);
document.getElementById("pyrmont_ultimo_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(pyrmont_ultimo_livepop, 500);
}
