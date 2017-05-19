/*
Aufgabe: 6a
Name: Ron Metzger
Matrikel:  254878
Datum: 14.05.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
Janett hatte mir zu Anfang mit der Aufgabe geholfen.
*/


namespace Aufg8_Hive {


    export class flowerSettings {
        x: number;
        y: number;
        color: string;


        constructor(_x: number, _y: number, _color: string) {
            this.x = _x;
            this.y = _y;
            this.color = _color;

        }
        randomFlowerPos(): void {

            this.x = Math.floor((Math.random() * 400) + 0);
            this.y = Math.floor((Math.random() * 145) + 155);






            this.drawFlower();
        }


        drawFlower(): void {
            crc3.beginPath();

            let color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","
                + Math.floor(Math.random() * 255) + ")";


            crc3.fillStyle = color;
            crc3.strokeStyle = color;
            crc3.ellipse(this.x + 0, this.y + 0, 4, 10, 0 * Math.PI / 180, 0, 2 * Math.PI);
            crc3.ellipse(this.x + 0, this.y + 0, 4, 10, 45 * Math.PI / 180, 0, 2 * Math.PI);
            crc3.ellipse(this.x + 0, this.y + 0, 4, 10, 90 * Math.PI / 180, 0, 2 * Math.PI);
            crc3.ellipse(this.x + 0, this.y + 0, 4, 10, 135 * Math.PI / 180, 0, 2 * Math.PI);
            crc3.closePath();
            crc3.fill();
            crc3.stroke();
            crc3.beginPath();
            crc3.fillStyle = "#FFFFFF";
            crc3.strokeStyle = "#FFFFFF";
            crc3.ellipse(this.x + 0, this.y + 0, 4, 4, 0 * Math.PI / 180, 0, 2 * Math.PI);
            crc3.closePath();
            crc3.fill();

        }

    }

}