function springfield_lakes_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15428;
var increase = Math.round(passed*2.59017407928486e-12*population);
document.getElementById("springfield_lakes_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(springfield_lakes_livepop, 500);
}
