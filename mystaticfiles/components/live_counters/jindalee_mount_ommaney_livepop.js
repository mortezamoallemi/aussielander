function jindalee_mount_ommaney_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7513;
var increase = Math.round(passed*2.08514471344467e-13*population);
document.getElementById("jindalee_mount_ommaney_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(jindalee_mount_ommaney_livepop, 500);
}
