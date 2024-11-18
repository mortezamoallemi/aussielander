function mount_dandenong_olinda_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9709;
var increase = Math.round(passed*3.40578982954533e-14*population);
document.getElementById("mount_dandenong_olinda_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mount_dandenong_olinda_livepop, 500);
}
