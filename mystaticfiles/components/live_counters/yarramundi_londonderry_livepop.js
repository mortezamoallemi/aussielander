function yarramundi_londonderry_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7376;
var increase = Math.round(passed*4.71974163593144e-13*population);
document.getElementById("yarramundi_londonderry_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(yarramundi_londonderry_livepop, 500);
}
