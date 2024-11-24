function busselton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 36614;
var increase = Math.round(passed*1.20335566586986e-12*population);
document.getElementById("busselton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(busselton_livepop, 500);
}
