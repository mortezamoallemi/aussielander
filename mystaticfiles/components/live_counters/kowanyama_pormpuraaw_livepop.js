function kowanyama_pormpuraaw_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 1698;
var increase = Math.round(passed*1.87023385220529e-14*population);
document.getElementById("kowanyama_pormpuraaw_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kowanyama_pormpuraaw_livepop, 500);
}
