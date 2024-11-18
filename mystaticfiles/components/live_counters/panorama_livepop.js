function panorama_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8069;
var increase = Math.round(passed*1.76121490381199e-13*population);
document.getElementById("panorama_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(panorama_livepop, 500);
}
