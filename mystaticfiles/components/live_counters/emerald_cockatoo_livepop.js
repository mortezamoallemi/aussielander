function emerald_cockatoo_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18001;
var increase = Math.round(passed*1.75387909759051e-13*population);
document.getElementById("emerald_cockatoo_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(emerald_cockatoo_livepop, 500);
}
