function port_pirie_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14007;
var increase = Math.round(passed*-1.67304264921112e-14*population);
document.getElementById("port_pirie_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(port_pirie_livepop, 500);
}
