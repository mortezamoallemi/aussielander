function lockridge_kiara_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10574;
var increase = Math.round(passed*1.72410501660451e-12*population);
document.getElementById("lockridge_kiara_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lockridge_kiara_livepop, 500);
}
