function port_pirie_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3307;
var increase = Math.round(passed*1.31765561963873e-13*population);
document.getElementById("port_pirie_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(port_pirie_region_livepop, 500);
}
