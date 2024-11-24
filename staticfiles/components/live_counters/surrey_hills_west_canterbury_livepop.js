function surrey_hills_west_canterbury_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16320;
var increase = Math.round(passed*1.6136166404278e-13*population);
document.getElementById("surrey_hills_west_canterbury_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(surrey_hills_west_canterbury_livepop, 500);
}
