function monto_eidsvold_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3830;
var increase = Math.round(passed*1.91634844247607e-13*population);
document.getElementById("monto_eidsvold_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(monto_eidsvold_livepop, 500);
}
