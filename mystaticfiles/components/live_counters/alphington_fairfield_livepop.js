function alphington_fairfield_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8938;
var increase = Math.round(passed*5.42669494984815e-13*population);
document.getElementById("alphington_fairfield_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(alphington_fairfield_livepop, 500);
}
