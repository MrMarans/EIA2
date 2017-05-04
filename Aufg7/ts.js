var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        var List = _input.split(", ");
        var i = {
            studentnumber: parseInt(List[0]),
            surname: List[1],
            name: List[2],
            age: parseInt(List[3]),
            sex: parseInt(List[4]),
            comment: List[5],
        };
        var sexNumb = List[4];
        students.push(s);
        var sex;
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
})(StudiVZ || (StudiVZ = {}));
function queryData(_matrikel) {
    for (var i = 0; i < List.length; i++) {
        if (students[i].matrikelnr == _matrikel) {
            var sex = void 0;
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
//# sourceMappingURL=ts.js.map