function frenchville_mount_archer_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9075;
var increase = Math.round(passed*-1.17017454726153e-13*population);
document.getElementById("frenchville_mount_archer_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(frenchville_mount_archer_livepop, 500);
}
