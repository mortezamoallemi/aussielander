function east_victoria_park_carlisle_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16550;
var increase = Math.round(passed*6.27025471378777e-13*population);
document.getElementById("east_victoria_park_carlisle_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(east_victoria_park_carlisle_livepop, 500);
}
