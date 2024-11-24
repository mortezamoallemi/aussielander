function mount_nelson_dynnyrne_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4658;
var increase = Math.round(passed*3.58493076851087e-13*population);
document.getElementById("mount_nelson_dynnyrne_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mount_nelson_dynnyrne_livepop, 500);
}
