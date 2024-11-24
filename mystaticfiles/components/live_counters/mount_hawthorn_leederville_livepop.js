function mount_hawthorn_leederville_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10702;
var increase = Math.round(passed*2.43428695747388e-13*population);
document.getElementById("mount_hawthorn_leederville_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mount_hawthorn_leederville_livepop, 500);
}
