function booragoon_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14448;
var increase = Math.round(passed*2.5892797024283e-13*population);
document.getElementById("booragoon_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(booragoon_livepop, 500);
}
