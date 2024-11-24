function chelsea_bonbeach_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14191;
var increase = Math.round(passed*5.77428713491359e-13*population);
document.getElementById("chelsea_bonbeach_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(chelsea_bonbeach_livepop, 500);
}
