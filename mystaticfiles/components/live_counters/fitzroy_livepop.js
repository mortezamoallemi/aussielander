function fitzroy_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10447;
var increase = Math.round(passed*6.47518240662448e-13*population);
document.getElementById("fitzroy_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(fitzroy_livepop, 500);
}
