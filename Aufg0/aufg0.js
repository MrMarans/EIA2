document.addEventListener('DOMContentLoaded', function () {
    var name;
    name = prompt("Bitte gebe deinen Namen ein");
    if (name != null) {
        document.getElementsByTagName("div")[0].innerHTML = "Genervtes Hallo von mir,  " + name;
    }
});
//# sourceMappingURL=aufg0.js.map