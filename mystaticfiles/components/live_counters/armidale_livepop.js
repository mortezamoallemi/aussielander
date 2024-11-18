function armidale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 23348;
var increase = Math.round(passed*2.43371042094438e-13*population);
document.getElementById("armidale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(armidale_livepop, 500);
}
