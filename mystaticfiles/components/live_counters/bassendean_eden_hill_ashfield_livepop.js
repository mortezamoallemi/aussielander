function bassendean_eden_hill_ashfield_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15093;
var increase = Math.round(passed*2.95888455357683e-13*population);
document.getElementById("bassendean_eden_hill_ashfield_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bassendean_eden_hill_ashfield_livepop, 500);
}
