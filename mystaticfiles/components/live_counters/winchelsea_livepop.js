function winchelsea_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5746;
var increase = Math.round(passed*6.76866651103402e-14*population);
document.getElementById("winchelsea_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(winchelsea_livepop, 500);
}
