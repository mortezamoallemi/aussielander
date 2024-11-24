function hahndorf_echunga_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4468;
var increase = Math.round(passed*2.7559151792707e-13*population);
document.getElementById("hahndorf_echunga_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hahndorf_echunga_livepop, 500);
}
