function evatt_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5329;
var increase = Math.round(passed*-9.80156455726563e-14*population);
document.getElementById("evatt_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(evatt_livepop, 500);
}
