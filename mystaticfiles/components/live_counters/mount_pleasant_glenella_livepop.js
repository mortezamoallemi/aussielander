function mount_pleasant_glenella_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10708;
var increase = Math.round(passed*-2.48264137212439e-14*population);
document.getElementById("mount_pleasant_glenella_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mount_pleasant_glenella_livepop, 500);
}
