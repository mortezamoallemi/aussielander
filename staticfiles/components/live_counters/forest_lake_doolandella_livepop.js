function forest_lake_doolandella_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 27708;
var increase = Math.round(passed*5.63318835171891e-13*population);
document.getElementById("forest_lake_doolandella_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(forest_lake_doolandella_livepop, 500);
}
