function rose_bay_vaucluse_watsons_bay_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11844;
var increase = Math.round(passed*7.05357315550945e-14*population);
document.getElementById("rose_bay_vaucluse_watsons_bay_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(rose_bay_vaucluse_watsons_bay_livepop, 500);
}
