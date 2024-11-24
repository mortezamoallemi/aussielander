function rochedale_burbank_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6318;
var increase = Math.round(passed*2.78115141861408e-12*population);
document.getElementById("rochedale_burbank_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(rochedale_burbank_livepop, 500);
}
