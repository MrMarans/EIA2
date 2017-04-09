//Aufgabe: Aufgabe 3
//Name: Metzger Ron
//Matrikel: 254878 
//Datum: 07.04.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
document.addEventListener('DOMContentLoaded', function () {
    var Stapel = ["Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo König", "Karo As", "Baum 7", "Baum 8", "Baum 9", "Baum 10", "Baum Bube", "Baum Dame", "Baum König", "Baum As", "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz König", "Herz As", "Blatt 7", "Blatt 8", "Blatt 9", "Blatt 10", "Blatt Bube", "Blatt Dame", "Blatt König", "Blatt As"]; //Ich konnte mir die nie anders merken
    var Hand = [];
    var Friedhof = [];
    var n = Stapel.length;
    document.getElementById("Stapel").textContent = "Bitte Karten ziehen";
    document.getElementById("Friedhof").textContent = "Friedhof";
    document.getElementById("Stapel").addEventListener("click", function () {
        if (Stapel.length > 0 && Hand.length < 5) {
            n--;
            var i = Math.floor((Math.random() * n) + 0);
            var Ziehen = Stapel[i];
            Stapel.splice(i, 1);
            Hand.push(Ziehen);
            document.getElementById("Stapel").textContent = "Es gibt noch " + Stapel.length + " Karten";
            var div = document.createElement("div");
            document.getElementById("Hand").appendChild(div);
            div.textContent = Ziehen;
            div.addEventListener("click", function () {
                for (var i_1 = 0; i_1 < Hand.length; i_1++) {
                    if (this.textContent == Hand[i_1]) {
                        Friedhof.push(Hand[i_1]);
                        Hand.splice(i_1, 1);
                    }
                }
                document.getElementById("Friedhof").textContent = "Verstorbene Karten" + "Karten: " + Friedhof.length;
                this.parentNode.removeChild(this);
            });
        }
    });
});
//# sourceMappingURL=aufg3b.js.map