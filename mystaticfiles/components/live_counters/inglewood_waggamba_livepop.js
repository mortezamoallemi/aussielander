function inglewood_waggamba_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4246;
var increase = Math.round(passed*8.1173365438377e-14*population);
document.getElementById("inglewood_waggamba_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(inglewood_waggamba_livepop, 500);
}
