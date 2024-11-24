function palm_beach_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14654;
var increase = Math.round(passed*3.09057338985698e-13*population);
document.getElementById("palm_beach_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(palm_beach_livepop, 500);
}
