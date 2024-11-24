function cabramatta_lansvale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 24708;
var increase = Math.round(passed*3.54438747344388e-13*population);
document.getElementById("cabramatta_lansvale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cabramatta_lansvale_livepop, 500);
}
