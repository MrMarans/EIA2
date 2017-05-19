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
        function bee(_x, _y, _leftpush, _rightpush, _color) {
            this.x = _x;
            this.y = _y;
            this.leftpush = _leftpush;
            this.rightpush = _rightpush;
            this.color = _color;
        }
        bee.prototype.update = function () {
            this.draw();
            this.move();
        };
        bee.prototype.draw = function () {
            crc3.beginPath();
            crc3.fillStyle = "#000000";
            crc3.strokeStyle = "#000000";
            crc3.lineTo(this.x - 1, this.y + 0);
            crc3.lineTo(this.x - 1, this.y + 1);
            crc3.lineTo(this.x + 0, this.y + 1);
            crc3.lineTo(this.x + 0, this.y - 2);
            crc3.lineTo(this.x - 1, this.y - 2);
            crc3.lineTo(this.x - 1, this.y - 1);
            crc3.lineTo(this.x - 2, this.y + 0);
            crc3.closePath();
            crc3.fill();
            crc3.stroke();
            crc3.beginPath();
            crc3.fillStyle = this.color;
            crc3.lineTo(this.x + 4, this.y + 0);
            crc3.lineTo(this.x + 4, this.y - 1);
            crc3.lineTo(this.x + 5, this.y - 1);
            crc3.lineTo(this.x + 5, this.y - 2);
            crc3.lineTo(this.x + 4, this.y - 2);
            crc3.lineTo(this.x + 4, this.y - 3);
            crc3.lineTo(this.x + 0, this.y - 3);
            crc3.lineTo(this.x + 0, this.y + 0);
            crc3.closePath();
            crc3.fill();
            crc3.stroke();
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