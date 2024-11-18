function wonthaggi_inverloch_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 22228;
var increase = Math.round(passed*6.58751974439161e-13*population);
document.getElementById("wonthaggi_inverloch_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wonthaggi_inverloch_livepop, 500);
}
