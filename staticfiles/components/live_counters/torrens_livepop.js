function torrens_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2206;
var increase = Math.round(passed*-2.20366381040418e-13*population);
document.getElementById("torrens_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(torrens_livepop, 500);
}
