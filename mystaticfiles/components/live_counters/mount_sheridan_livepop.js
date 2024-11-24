function mount_sheridan_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8275;
var increase = Math.round(passed*2.20686706728021e-13*population);
document.getElementById("mount_sheridan_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mount_sheridan_livepop, 500);
}
