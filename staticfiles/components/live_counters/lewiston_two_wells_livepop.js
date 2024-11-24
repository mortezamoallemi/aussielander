function lewiston_two_wells_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5633;
var increase = Math.round(passed*4.52606025268369e-13*population);
document.getElementById("lewiston_two_wells_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lewiston_two_wells_livepop, 500);
}
