function armadale_wungong_brookdale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19046;
var increase = Math.round(passed*1.01117040391238e-12*population);
document.getElementById("armadale_wungong_brookdale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(armadale_wungong_brookdale_livepop, 500);
}
