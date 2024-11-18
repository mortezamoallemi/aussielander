function edithvale_aspendale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12750;
var increase = Math.round(passed*3.43914601161828e-13*population);
document.getElementById("edithvale_aspendale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(edithvale_aspendale_livepop, 500);
}
