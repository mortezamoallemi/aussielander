function darlinghurst_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11317;
var increase = Math.round(passed*7.46694922071356e-13*population);
document.getElementById("darlinghurst_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(darlinghurst_livepop, 500);
}
