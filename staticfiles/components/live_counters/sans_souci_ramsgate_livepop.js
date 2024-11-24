function sans_souci_ramsgate_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15976;
var increase = Math.round(passed*4.82338229912528e-13*population);
document.getElementById("sans_souci_ramsgate_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(sans_souci_ramsgate_livepop, 500);
}
