function upper_mount_gravatt_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9392;
var increase = Math.round(passed*3.7553805743872e-13*population);
document.getElementById("upper_mount_gravatt_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(upper_mount_gravatt_livepop, 500);
}
