function willunga_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3390;
var increase = Math.round(passed*1.93749646108736e-13*population);
document.getElementById("willunga_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(willunga_livepop, 500);
}
