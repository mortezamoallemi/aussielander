function hughes_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2993;
var increase = Math.round(passed*8.10348681665425e-14*population);
document.getElementById("hughes_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hughes_livepop, 500);
}
