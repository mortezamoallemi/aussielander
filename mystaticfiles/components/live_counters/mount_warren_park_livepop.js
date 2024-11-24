function mount_warren_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5789;
var increase = Math.round(passed*1.39559728343478e-13*population);
document.getElementById("mount_warren_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mount_warren_park_livepop, 500);
}
