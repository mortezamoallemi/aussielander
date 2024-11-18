function forrestfield_wattle_grove_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18666;
var increase = Math.round(passed*1.00280940069326e-12*population);
document.getElementById("forrestfield_wattle_grove_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(forrestfield_wattle_grove_livepop, 500);
}
