document.addEventListener('DOMContentLoaded', function() {
    //Zählt das als Funktion mittleren Umfangs?
    var Zitat1 = document.getElementById("Zitat1");

    var Zitat1Show = function() {
        var y = window.scrollY; //Damit erkennt, bis wohin wir gescrollt haben
        var headerhight = document.getElementById('header').offsetHeight; //das erhalten verschiedener Höhen, zum späteren berechnen
        if ($(window).width() > 739) { //weil das nur so auf dem Handy passieren soll. Weil die webseite ist eeeetwas kürzer auf dem Handys
            if (y >= headerhight + 100) {
                Zitat1.className = "Zitat show transform1"
            } else {
                Zitat1.className = "Zitat hide transform0"
            }
        }
        else {
            if (y >= headerhight + 50) {
                Zitat1.className = "Zitat show transform1"
            } else {
                Zitat1.className = "Zitat hide transform0"
            }

        }
    }
    window.addEventListener("scroll", Zitat1Show);
    //Ende funktion mittleren Umfangs

    //Konditionäle Anweisungen
    var Zitat2 = document.getElementById("Zitat2"); //Im Prinzip das gleiche wie oben, nur ohne Handyzusatz, weil nämlich es auf dem Handy fast perfekt passt und nachjustieren keinen Sinn macht.
    var Zitat2Show = function() {
        var y = window.scrollY;
        var headerhight = document.getElementById('header').offsetHeight;  //höhe vom header bekommen
        var nachvidheight = document.getElementById('nachVid').offsetHeight; //höhe vom Zitatteil nach dem Video
        var AboutMeheight = document.getElementById('AboutMe').offsetHeight; //höhe des Teils über mich
        var skillsheight = document.getElementsByClassName('skills').offsetHeight;
        if (y >= headerhight + nachvidheight + AboutMeheight + skillsheight + 150) { //gaaanz große Mathe Skillz die hier angewandt werden
            Zitat2.className = "Zitat show transform1" //ich empfand es mit den 3 Klassen einfach zu programmieren. Zudem haben die TS/JS Klassen und IDs nen eigenen Abteil in der CSS, also no problemo
        } else {
            Zitat2.className = "Zitat hide transform0"
        }
    };
    window.addEventListener("scroll", Zitat2Show);

    var Navigation = document.getElementById("navtyspescript");  //Ich finde, das Bürgermenü hätte bei mir vollkommen falsch ausgesehen und hätte nicht reingepasst.
    //Zudem empfinde ich, die Nav Bar ist auch nicht zu dick oder nimmt zu viel Platz ein, störrt aber auch nicht übermäßig, weil es ziemlich durchsichtig ist
    var NavShow = function() {
        var y = window.scrollY;
        var headerhight = document.getElementById('header').offsetHeight;
        if (y >= headerhight) {
            Navigation.className = "nav shownav"
        }
        else {
            Navigation.className = "nav hide"
        }
    }
    window.addEventListener("scroll", NavShow);
    //Ende Kondotionäle Anweisung, sogar eigentlich 3 für den Aufforderung von einem! Schnäppchen


    //Schleife
    //kennt man schon, glaube, ich muss hier nichts zu kommentieren
    function FilternGruppe(): void {
        var kaesten = document.getElementsByClassName("ProjektTypeScriptClass");
        for (var i: number = 0; i < kaesten.length; i++) {
            var kasten = <HTMLElement>kaesten[i];
            var kategorie = kasten.getAttribute('data-Kategorie');
            kasten.style.display = "block";
            if (kategorie != "Gruppenarbeit") {
                kasten.style.display = "none";
                console.log("Test")
            }
        }
    }
    function FilternSolo(): void {
        var kaesten = document.getElementsByClassName("ProjektTypeScriptClass");
        for (var i: number = 0; i < kaesten.length; i++) {
            var kasten = <HTMLElement>kaesten[i];
            var kategorie = kasten.getAttribute('data-Kategorie');
            kasten.style.display = "block";
            if (kategorie != "Alleinarbeit") {
                kasten.style.display = "none";
                console.log("Test")
            }
        }
    }

    function reset(): void {
        var kaesten = document.getElementsByClassName("ProjektTypeScriptClass");
        for (var i: number = 0; i < kaesten.length; i++) {
            var kasten = <HTMLElement>kaesten[i];
            kasten.style.display = "block";
        }
    }

    document.getElementById("Gruppe").addEventListener("click", function() {
        FilternGruppe();
    })
    document.getElementById("Solo").addEventListener("click", function() {
        FilternSolo();
    })
    document.getElementById("Reset").addEventListener("click", function() {
        reset();
    })

    //Ende der Schleife Schleife Schleife Schleife Schleife Schleife... Fehler 404; End of Schleife not found





});