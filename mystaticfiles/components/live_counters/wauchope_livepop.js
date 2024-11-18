function wauchope_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11150;
var increase = Math.round(passed*5.56063988335081e-13*population);
document.getElementById("wauchope_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wauchope_livepop, 500);
}
