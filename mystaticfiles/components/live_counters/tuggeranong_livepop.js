function tuggeranong_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 22;
var increase = Math.round(passed*-1.75198742153829e-12*population);
document.getElementById("tuggeranong_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(tuggeranong_livepop, 500);
}
