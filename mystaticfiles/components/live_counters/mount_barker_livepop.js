function mount_barker_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17367;
var increase = Math.round(passed*9.64423843183561e-13*population);
document.getElementById("mount_barker_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mount_barker_livepop, 500);
}
