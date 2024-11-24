function mount_johns_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3738;
var increase = Math.round(passed*1.65003346828735e-13*population);
document.getElementById("mount_johns_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mount_johns_livepop, 500);
}
