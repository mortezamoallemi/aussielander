function bradbury_wedderburn_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18962;
var increase = Math.round(passed*-6.35615475948548e-14*population);
document.getElementById("bradbury_wedderburn_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bradbury_wedderburn_livepop, 500);
}
