function heathridge_connolly_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10308;
var increase = Math.round(passed*-6.67097552777341e-14*population);
document.getElementById("heathridge_connolly_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(heathridge_connolly_livepop, 500);
}
