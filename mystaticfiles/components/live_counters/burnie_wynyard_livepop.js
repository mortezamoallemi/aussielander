function burnie_wynyard_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 26488;
var increase = Math.round(passed*-9.10441268152128e-14*population);
document.getElementById("burnie_wynyard_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(burnie_wynyard_livepop, 500);
}
