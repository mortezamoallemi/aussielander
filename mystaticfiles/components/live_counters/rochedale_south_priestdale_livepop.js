function rochedale_south_priestdale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15455;
var increase = Math.round(passed*1.38140147437858e-13*population);
document.getElementById("rochedale_south_priestdale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(rochedale_south_priestdale_livepop, 500);
}
