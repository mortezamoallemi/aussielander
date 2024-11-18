function riverton_shelley_rossmoyne_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13485;
var increase = Math.round(passed*1.5616451171989e-13*population);
document.getElementById("riverton_shelley_rossmoyne_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(riverton_shelley_rossmoyne_livepop, 500);
}
