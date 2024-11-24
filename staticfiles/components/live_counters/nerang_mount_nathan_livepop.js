function nerang_mount_nathan_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20532;
var increase = Math.round(passed*5.49801084192554e-13*population);
document.getElementById("nerang_mount_nathan_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(nerang_mount_nathan_livepop, 500);
}
