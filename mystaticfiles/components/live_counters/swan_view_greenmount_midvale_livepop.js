function swan_view_greenmount_midvale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12073;
var increase = Math.round(passed*3.00130601754909e-14*population);
document.getElementById("swan_view_greenmount_midvale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(swan_view_greenmount_midvale_livepop, 500);
}
