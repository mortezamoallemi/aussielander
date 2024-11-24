function st_leonards_naremburn_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10500;
var increase = Math.round(passed*7.95631970477661e-13*population);
document.getElementById("st_leonards_naremburn_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(st_leonards_naremburn_livepop, 500);
}
