function picton_tahmoor_buxton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16786;
var increase = Math.round(passed*5.58901877918134e-13*population);
document.getElementById("picton_tahmoor_buxton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(picton_tahmoor_buxton_livepop, 500);
}
