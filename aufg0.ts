document.addEventListener('DOMContentLoaded', function() {

    var name: string;
    name = prompt("Bitte gebe deinen Namen ein");

    if (name != null) {
        document.getElementsByTagName("div")[0].innerHTML = "Hallo " + name;
    }


});