function narrabundah_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5956;
var increase = Math.round(passed*3.10969341640484e-13*population);
document.getElementById("narrabundah_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(narrabundah_livepop, 500);
}
