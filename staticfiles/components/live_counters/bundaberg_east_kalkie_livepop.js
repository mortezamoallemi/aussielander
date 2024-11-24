function bundaberg_east_kalkie_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5473;
var increase = Math.round(passed*3.07455585048649e-13*population);
document.getElementById("bundaberg_east_kalkie_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bundaberg_east_kalkie_livepop, 500);
}
