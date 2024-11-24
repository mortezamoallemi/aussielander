function narangba_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18575;
var increase = Math.round(passed*8.59007134422056e-13*population);
document.getElementById("narangba_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(narangba_livepop, 500);
}
