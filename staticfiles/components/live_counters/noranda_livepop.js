function noranda_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7978;
var increase = Math.round(passed*-7.82138697167959e-14*population);
document.getElementById("noranda_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(noranda_livepop, 500);
}
