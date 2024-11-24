function rouse_hill_beaumont_hills_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 22651;
var increase = Math.round(passed*1.39797132582922e-12*population);
document.getElementById("rouse_hill_beaumont_hills_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(rouse_hill_beaumont_hills_livepop, 500);
}
