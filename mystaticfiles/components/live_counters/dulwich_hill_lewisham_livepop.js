function dulwich_hill_lewisham_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16809;
var increase = Math.round(passed*3.50988123649409e-13*population);
document.getElementById("dulwich_hill_lewisham_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(dulwich_hill_lewisham_livepop, 500);
}
