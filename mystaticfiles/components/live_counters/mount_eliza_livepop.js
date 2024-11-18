function mount_eliza_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17889;
var increase = Math.round(passed*2.31416819396829e-13*population);
document.getElementById("mount_eliza_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mount_eliza_livepop, 500);
}
