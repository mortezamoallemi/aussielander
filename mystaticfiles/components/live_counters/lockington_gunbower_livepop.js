function lockington_gunbower_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3802;
var increase = Math.round(passed*1.29758956333806e-13*population);
document.getElementById("lockington_gunbower_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lockington_gunbower_livepop, 500);
}
