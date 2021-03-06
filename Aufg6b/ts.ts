/*
Aufgabe: 6a
Name: Ron Metzger
Matrikel:  254878
Datum: 07.05.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben ha  be. Er wurde nicht kopiert und auch nicht diktiert.
*/


namespace StudiVZ {
    interface StudentData {
        matrikelnr: number;
        name: string;
        vorname: string;
        alter: number;
        geschlecht: boolean;
        kommentar: string;
    }
    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
        let array: string[] = _input.split(", ");
        let s: StudentData = {
            matrikelnr: parseInt(array[0]),
            name: array[1],
            vorname: array[2],
            alter: parseInt(array[3]),
            geschlecht: parseInt(array[4]) == 1,
            kommentar: array[5]

        };

        students.push(s);

        let geschlecht: String;
        if (s.geschlecht == true) {
            geschlecht = "m";
        }
        else {
            geschlecht = "w";
        }


       return "Folgende Daten wurden gespeichert: \nMatrikelnummer: " + s.matrikelnr + "\nName: " + s.name + "\nVorname: " + s.vorname + "\nAlter: " + s.alter + "\nGeschlecht: " + geschlecht + "\nKommentar: " + s.kommentar;
    }

    function queryData(_matrikel: number): string {

        for (let i: number = 0; i < students.length; i++) {
            if (students[i].matrikelnr == _matrikel) {
                let sex: string;

                if (students[i].geschlecht == true) {
                    sex = "m";
                }
                else {
                    sex = "w";
                }

                return "Matrikelnummer: " + students[i].matrikelnr + "\nName: " + students[i].name + "\nVorname: " + students[i].vorname + "\nAlter: " + students[i].alter + "\nGeschlecht: " + geschlecht + "\nKommentar: " + students[i].kommentar;
            }
            else{}
        }
    }
}

            }
            else { }
        }
    }
}
