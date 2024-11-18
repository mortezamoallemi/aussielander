function waratah_north_lambton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12059;
var increase = Math.round(passed*1.05529398477144e-13*population);
document.getElementById("waratah_north_lambton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(waratah_north_lambton_livepop, 500);
}
