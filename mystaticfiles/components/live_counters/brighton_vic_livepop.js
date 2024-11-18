function brighton_vic_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 22694;
var increase = Math.round(passed*4.15451614396526e-13*population);
document.getElementById("brighton_vic_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(brighton_vic_livepop, 500);
}
