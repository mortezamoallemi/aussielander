function buderim_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16616;
var increase = Math.round(passed*5.31176179291547e-13*population);
document.getElementById("buderim_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(buderim_north_livepop, 500);
}
