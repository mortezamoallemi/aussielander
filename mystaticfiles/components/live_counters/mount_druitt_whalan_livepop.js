function mount_druitt_whalan_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 22701;
var increase = Math.round(passed*2.80159064654741e-13*population);
document.getElementById("mount_druitt_whalan_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mount_druitt_whalan_livepop, 500);
}
