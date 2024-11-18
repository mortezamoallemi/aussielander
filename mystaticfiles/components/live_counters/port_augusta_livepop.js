function port_augusta_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13516;
var increase = Math.round(passed*-6.58171096159559e-14*population);
document.getElementById("port_augusta_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(port_augusta_livepop, 500);
}
