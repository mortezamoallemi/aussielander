function ourimbah_fountaindale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4860;
var increase = Math.round(passed*8.67155117973735e-14*population);
document.getElementById("ourimbah_fountaindale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ourimbah_fountaindale_livepop, 500);
}
