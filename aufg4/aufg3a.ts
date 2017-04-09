
//Aufgabe: Aufgabe 3
//Name: Metzger Ron
//Matrikel: 254878 
//Datum: 06.04.2017
    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.



document.addEventListener('DOMContentLoaded', function() {


    for (let i: number = 0; i < 8; i++) {
        let Divs: NodeListOf<HTMLElement> = document.getElementsByTagName("div");
        Divs[i].addEventListener("click", function() {
            Divs[i].classList.toggle("Auswahl");


            let divClicked: NodeListOf<Element> = document.getElementsByClassName("Auswahl");
            let AuswahlRechner: number = 0;
            if (divClicked.length == 0)
                document.getElementById("AuswahlRechner").style.display = "none";

            else {
                document.getElementById("AuswahlRechner").style.display = "inline-block";
                for (let j: number = 0; j < divClicked.length; j++) {
                    AuswahlRechner += Number(divClicked[j].textContent);
                    document.getElementById("AuswahlRechner").innerText = "Das wären dann so viele Reiskörner: " + "\r" + "In Normal: " + AuswahlRechner + "\r" + "Als Nerd: " + AuswahlRechner.toString(16);
                }
            }
            console.log(AuswahlRechner);
        });
    }

    document.addEventListener("mousemove", function(Event) {
        document.getElementById("AuswahlRechner").style.left = (Event.clientX + 10) + "px";
        document.getElementById("AuswahlRechner").style.top = (Event.clientY + 10) + "px";
    });
})