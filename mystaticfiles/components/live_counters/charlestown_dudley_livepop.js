function charlestown_dudley_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 23965;
var increase = Math.round(passed*1.09708112583954e-13*population);
document.getElementById("charlestown_dudley_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(charlestown_dudley_livepop, 500);
}
