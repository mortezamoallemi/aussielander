function morningside_seven_hills_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12613;
var increase = Math.round(passed*6.23487997700975e-13*population);
document.getElementById("morningside_seven_hills_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(morningside_seven_hills_livepop, 500);
}