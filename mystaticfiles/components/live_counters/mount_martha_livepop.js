function mount_martha_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18547;
var increase = Math.round(passed*5.19235598949633e-13*population);
document.getElementById("mount_martha_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mount_martha_livepop, 500);
}
