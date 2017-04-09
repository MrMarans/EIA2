//Aufgabe: Aufgabe 3
//Name: Metzger Ron
//Matrikel: 254878 
//Datum: 06.04.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
document.addEventListener('DOMContentLoaded', function () {
    var _loop_1 = function(i) {
        var Divs = document.getElementsByTagName("div");
        Divs[i].addEventListener("click", function () {
            Divs[i].classList.toggle("Auswahl");
            var divClicked = document.getElementsByClassName("Auswahl");
            var AuswahlRechner = 0;
            if (divClicked.length == 0)
                document.getElementById("AuswahlRechner").style.display = "none";
            else {
                document.getElementById("AuswahlRechner").style.display = "inline-block";
                for (var j = 0; j < divClicked.length; j++) {
                    AuswahlRechner += Number(divClicked[j].textContent);
                    document.getElementById("AuswahlRechner").innerText = "Das w�ren dann so viele Reisk�rner: " + "\r" + "In Normal: " + AuswahlRechner + "\r" + "Als Nerd: " + AuswahlRechner.toString(16);
                }
            }
            console.log(AuswahlRechner);
        });
    };
    for (var i = 0; i < 8; i++) {
        _loop_1(i);
    }
    document.addEventListener("mousemove", function (Event) {
        document.getElementById("AuswahlRechner").style.left = (Event.clientX + 10) + "px";
        document.getElementById("AuswahlRechner").style.top = (Event.clientY + 10) + "px";
    });
});
//# sourceMappingURL=aufg3a.js.map