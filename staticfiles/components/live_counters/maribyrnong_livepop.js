function maribyrnong_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12221;
var increase = Math.round(passed*1.16947050545557e-12*population);
document.getElementById("maribyrnong_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(maribyrnong_livepop, 500);
}
