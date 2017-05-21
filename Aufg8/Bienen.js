/*
Aufgabe: 6a
Name: Ron Metzger
Matrikel:  254878
Datum: 14.05.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
Janett hatte mir zu Anfang mit der Aufgabe geholfen.
*/
var Aufg8_Main;
(function (Aufg8_Main) {
    var bee = (function () {
        function bee(_x, _y, _color) {
            this.x = _x;
            this.y = _y;
            this.leftpush = 0;
            this.rightpush = 0;
            this.color = _color;
        }
        bee.prototype.update = function () {
            this.draw();
            this.move();
        };
        bee.prototype.draw = function () {
            Aufg8_Main.crc2.beginPath();
            Aufg8_Main.crc2.fillStyle = "#000000";
            Aufg8_Main.crc2.strokeStyle = "#000000";
            Aufg8_Main.crc2.lineTo(this.x - 1, this.y + 0);
            Aufg8_Main.crc2.lineTo(this.x - 1, this.y + 1);
            Aufg8_Main.crc2.lineTo(this.x + 0, this.y + 1);
            Aufg8_Main.crc2.lineTo(this.x + 0, this.y - 2);
            Aufg8_Main.crc2.lineTo(this.x - 1, this.y - 2);
            Aufg8_Main.crc2.lineTo(this.x - 1, this.y - 1);
            Aufg8_Main.crc2.lineTo(this.x - 2, this.y + 0);
            Aufg8_Main.crc2.closePath();
            Aufg8_Main.crc2.fill();
            Aufg8_Main.crc2.stroke();
            Aufg8_Main.crc2.beginPath();
            Aufg8_Main.crc2.fillStyle = this.color;
            Aufg8_Main.crc2.lineTo(this.x + 4, this.y + 0);
            Aufg8_Main.crc2.lineTo(this.x + 4, this.y - 1);
            Aufg8_Main.crc2.lineTo(this.x + 5, this.y - 1);
            Aufg8_Main.crc2.lineTo(this.x + 5, this.y - 2);
            Aufg8_Main.crc2.lineTo(this.x + 4, this.y - 2);
            Aufg8_Main.crc2.lineTo(this.x + 4, this.y - 3);
            Aufg8_Main.crc2.lineTo(this.x + 0, this.y - 3);
            Aufg8_Main.crc2.lineTo(this.x + 0, this.y + 0);
            Aufg8_Main.crc2.closePath();
            Aufg8_Main.crc2.fill();
            Aufg8_Main.crc2.stroke();
        };
        bee.prototype.move = function () {
            if (this.leftpush % 20 == 1) {
                this.x -= 5;
                this.rightpush++;
                if (this.leftpush % 100 == 1) {
                    this.gelehmt = true;
                    console.log("gelehmt");
                }
                else { }
            }
            else { }
            if (this.rightpush % 5 == 1) {
                this.x += 10;
            }
            else {
                this.x += Math.floor(Math.random() * 11) - 6;
                this.y += Math.floor(Math.random() * 11) - 5;
                this.leftpush++;
            }
            if (this.x < 0)
                this.x = 400;
            if (this.x > 400)
                this.x = 0;
            if (this.y < 0)
                this.y = 400;
            if (this.y > 400)
                this.y = 0;
        };
        return bee;
    }());
    Aufg8_Main.bee = bee;
})(Aufg8_Main || (Aufg8_Main = {}));
//# sourceMappingURL=Bienen.js.map