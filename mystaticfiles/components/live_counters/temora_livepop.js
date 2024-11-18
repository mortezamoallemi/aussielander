function temora_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6717;
var increase = Math.round(passed*3.80349450794459e-13*population);
document.getElementById("temora_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(temora_livepop, 500);
}
