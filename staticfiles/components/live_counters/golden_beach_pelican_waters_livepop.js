function golden_beach_pelican_waters_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11851;
var increase = Math.round(passed*9.34683982638482e-13*population);
document.getElementById("golden_beach_pelican_waters_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(golden_beach_pelican_waters_livepop, 500);
}
