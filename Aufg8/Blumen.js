/*
Aufgabe: 8
Name: Ron Metzger
Matrikel:  254878
Datum: 14.05.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
Janett hatte mir zu Anfang mit der Aufgabe geholfen.
*/
var Aufg8_Main;
(function (Aufg8_Main) {
    var flowerSettings = (function () {
        function flowerSettings() {
        }
        flowerSettings.prototype.randomFlowerPos = function () {
            this.x = Math.floor((Math.random() * 400) + 0);
            this.y = Math.floor((Math.random() * 145) + 155);
            this.drawFlower();
        };
        flowerSettings.prototype.drawFlower = function () {
            Aufg8_Main.crc2.beginPath();
            var color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","
                + Math.floor(Math.random() * 255) + ")";
            Aufg8_Main.crc2.fillStyle = color;
            Aufg8_Main.crc2.strokeStyle = color;
            Aufg8_Main.crc2.ellipse(this.x + 0, this.y + 0, 4, 10, 0 * Math.PI / 180, 0, 2 * Math.PI);
            Aufg8_Main.crc2.ellipse(this.x + 0, this.y + 0, 4, 10, 45 * Math.PI / 180, 0, 2 * Math.PI);
            Aufg8_Main.crc2.ellipse(this.x + 0, this.y + 0, 4, 10, 90 * Math.PI / 180, 0, 2 * Math.PI);
            Aufg8_Main.crc2.ellipse(this.x + 0, this.y + 0, 4, 10, 135 * Math.PI / 180, 0, 2 * Math.PI);
            Aufg8_Main.crc2.closePath();
            Aufg8_Main.crc2.fill();
            Aufg8_Main.crc2.stroke();
            Aufg8_Main.crc2.beginPath();
            Aufg8_Main.crc2.fillStyle = "#FFFF00";
            Aufg8_Main.crc2.strokeStyle = "#FFFF00";
            Aufg8_Main.crc2.ellipse(this.x + 0, this.y + 0, 4, 4, 0 * Math.PI / 180, 0, 2 * Math.PI);
            Aufg8_Main.crc2.closePath();
            Aufg8_Main.crc2.fill();
            Aufg8_Main.crc2.stroke();
        };
        return flowerSettings;
    }());
    Aufg8_Main.flowerSettings = flowerSettings;
})(Aufg8_Main || (Aufg8_Main = {}));
//# sourceMappingURL=Blumen.js.map