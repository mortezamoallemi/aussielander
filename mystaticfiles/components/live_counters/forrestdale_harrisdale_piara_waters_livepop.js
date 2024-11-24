function forrestdale_harrisdale_piara_waters_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19265;
var increase = Math.round(passed*6.02023655945479e-12*population);
document.getElementById("forrestdale_harrisdale_piara_waters_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(forrestdale_harrisdale_piara_waters_livepop, 500);
}
