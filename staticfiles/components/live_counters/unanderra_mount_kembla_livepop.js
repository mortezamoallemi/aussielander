function unanderra_mount_kembla_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15374;
var increase = Math.round(passed*2.19009043209271e-14*population);
document.getElementById("unanderra_mount_kembla_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(unanderra_mount_kembla_livepop, 500);
}
