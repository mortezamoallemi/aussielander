function daisy_hill_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6636;
var increase = Math.round(passed*3.74988764645634e-13*population);
document.getElementById("daisy_hill_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(daisy_hill_livepop, 500);
}
