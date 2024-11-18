function newtown_vic_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10148;
var increase = Math.round(passed*2.99433919638191e-13*population);
document.getElementById("newtown_vic_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(newtown_vic_livepop, 500);
}
