function kogarah_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11315;
var increase = Math.round(passed*1.03778081974822e-12*population);
document.getElementById("kogarah_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kogarah_livepop, 500);
}
