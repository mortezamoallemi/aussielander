function mount_annan_currans_hill_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 28576;
var increase = Math.round(passed*1.10041777025025e-12*population);
document.getElementById("mount_annan_currans_hill_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mount_annan_currans_hill_livepop, 500);
}
