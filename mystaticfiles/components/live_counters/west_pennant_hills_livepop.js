function west_pennant_hills_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12640;
var increase = Math.round(passed*9.86012994619234e-14*population);
document.getElementById("west_pennant_hills_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(west_pennant_hills_livepop, 500);
}
