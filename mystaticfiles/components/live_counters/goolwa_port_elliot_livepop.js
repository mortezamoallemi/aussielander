function goolwa_port_elliot_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11125;
var increase = Math.round(passed*4.03640510059249e-13*population);
document.getElementById("goolwa_port_elliot_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(goolwa_port_elliot_livepop, 500);
}
