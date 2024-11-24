function panania_milperra_picnic_point_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 25788;
var increase = Math.round(passed*3.98358124785636e-13*population);
document.getElementById("panania_milperra_picnic_point_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(panania_milperra_picnic_point_livepop, 500);
}
