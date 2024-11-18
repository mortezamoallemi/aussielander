function bargara_burnett_heads_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16595;
var increase = Math.round(passed*4.79727550324676e-13*population);
document.getElementById("bargara_burnett_heads_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bargara_burnett_heads_livepop, 500);
}
