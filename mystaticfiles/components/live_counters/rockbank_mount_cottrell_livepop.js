function rockbank_mount_cottrell_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3043;
var increase = Math.round(passed*8.50722215368353e-13*population);
document.getElementById("rockbank_mount_cottrell_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(rockbank_mount_cottrell_livepop, 500);
}
