function girrawheen_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8759;
var increase = Math.round(passed*3.16198679483018e-13*population);
document.getElementById("girrawheen_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(girrawheen_livepop, 500);
}
