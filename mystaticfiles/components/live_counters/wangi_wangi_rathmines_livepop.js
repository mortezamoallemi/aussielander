function wangi_wangi_rathmines_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8897;
var increase = Math.round(passed*1.36174517315635e-13*population);
document.getElementById("wangi_wangi_rathmines_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wangi_wangi_rathmines_livepop, 500);
}
