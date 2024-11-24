function kings_meadows_punchbowl_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4224;
var increase = Math.round(passed*6.47539568910027e-13*population);
document.getElementById("kings_meadows_punchbowl_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kings_meadows_punchbowl_livepop, 500);
}
