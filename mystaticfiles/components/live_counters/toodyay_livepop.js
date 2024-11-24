function toodyay_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4442;
var increase = Math.round(passed*7.90151147143504e-14*population);
document.getElementById("toodyay_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(toodyay_livepop, 500);
}
