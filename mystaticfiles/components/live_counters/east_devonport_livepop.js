function east_devonport_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4712;
var increase = Math.round(passed*-2.64918232098083e-13*population);
document.getElementById("east_devonport_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(east_devonport_livepop, 500);
}
