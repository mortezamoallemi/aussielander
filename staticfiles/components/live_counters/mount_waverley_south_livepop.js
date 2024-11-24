function mount_waverley_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18336;
var increase = Math.round(passed*4.2037827544719e-13*population);
document.getElementById("mount_waverley_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mount_waverley_south_livepop, 500);
}
