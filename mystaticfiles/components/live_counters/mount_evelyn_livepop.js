function mount_evelyn_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9698;
var increase = Math.round(passed*2.14145394777421e-13*population);
document.getElementById("mount_evelyn_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mount_evelyn_livepop, 500);
}
