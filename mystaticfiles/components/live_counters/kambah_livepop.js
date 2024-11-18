function kambah_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14900;
var increase = Math.round(passed*-2.29060960012683e-13*population);
document.getElementById("kambah_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kambah_livepop, 500);
}
