namespace StudiVZ {
    interface StudentData {
        // hier ist noch die richtige Datenstruktur festzulegen
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
        let List: string[] = _input.split(", ");
        let i: StudentData = {
            studentnumber: parseInt(List[0]),
            surname: List[1],
            name: List[2],
            age: parseInt(List[3]),
            sex: parseInt(List[4]),
            comment: List[5],

        };
        let sexNumb: number = List[4];
        students.push(s);

        let sex: String;
        switch (sexNumb) {
            case 0:
                {
                    sex == Male;
                    break;
                }
            case 1:
                {
                    sex == Female;
                    break;
                }
            case 2:
                {
                    sex == apache_helicopter;
                    break;
                }

        }

        return "Daten gespeichert\nMatrikelnr: " + s.matrikelnr + "\nName: " + s.surname + "\nVorname: " + s.name + "\nAlter: " + s.age + "\nGeschlecht: " + sex + "\nKommentar: " + s.comment;
    }
}
function queryData(_matrikel: number): string {

    for (let i: number = 0; i < List.length; i++) {
        if (students[i].matrikelnr == _matrikel) {
            let sex: string;

            if (students[i].sex == true) {
                sex = "m";
            }
            else {
                sex = "w";
            }

            return "Matrikelnr: " + students[i].matrikelnr + "\nName: " + students[i].surname + "\nVorname: " + students[i].name + "\nAlter: " + students[i].age + "\nGeschlecht: " + sex + "\nKommentar: " + students[i].comment;
        }
        else { }
    }
}
}
