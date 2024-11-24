function nhulunbuy_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3090;
var increase = Math.round(passed*-1.52987951889915e-12*population);
document.getElementById("nhulunbuy_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(nhulunbuy_livepop, 500);
}
