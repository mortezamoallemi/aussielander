function nelson_bay_peninsula_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 21015;
var increase = Math.round(passed*4.27857180873172e-13*population);
document.getElementById("nelson_bay_peninsula_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(nelson_bay_peninsula_livepop, 500);
}
