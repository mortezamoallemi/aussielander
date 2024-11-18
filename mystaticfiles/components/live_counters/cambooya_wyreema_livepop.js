function cambooya_wyreema_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6961;
var increase = Math.round(passed*1.2674845722097e-12*population);
document.getElementById("cambooya_wyreema_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cambooya_wyreema_livepop, 500);
}
