function cabramatta_west_mount_pritchard_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17188;
var increase = Math.round(passed*5.28385605428801e-13*population);
document.getElementById("cabramatta_west_mount_pritchard_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cabramatta_west_mount_pritchard_livepop, 500);
}
