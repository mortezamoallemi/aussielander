function coolangatta_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5950;
var increase = Math.round(passed*8.63011508722454e-13*population);
document.getElementById("coolangatta_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(coolangatta_livepop, 500);
}
