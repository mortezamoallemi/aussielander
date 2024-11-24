function peterborough_mount_remarkable_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5395;
var increase = Math.round(passed*-3.8674170868371e-14*population);
document.getElementById("peterborough_mount_remarkable_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(peterborough_mount_remarkable_livepop, 500);
}
