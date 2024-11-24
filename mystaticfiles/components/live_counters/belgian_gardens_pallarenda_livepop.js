function belgian_gardens_pallarenda_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3284;
var increase = Math.round(passed*-3.2558960774547e-13*population);
document.getElementById("belgian_gardens_pallarenda_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(belgian_gardens_pallarenda_livepop, 500);
}
