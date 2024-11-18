function campbelltown_woodbine_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18194;
var increase = Math.round(passed*9.12421513769728e-13*population);
document.getElementById("campbelltown_woodbine_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(campbelltown_woodbine_livepop, 500);
}
