var Bienenschwarm_Classes;
(function (Bienenschwarm_Classes) {
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
            Bienenschwarm_Classes.crc2.beginPath();
            Bienenschwarm_Classes.crc2.fillStyle = "#000000";
            Bienenschwarm_Classes.crc2.strokeStyle = "#000000";
            Bienenschwarm_Classes.crc2.lineTo(this.x - 1, this.y + 0);
            Bienenschwarm_Classes.crc2.lineTo(this.x - 1, this.y + 1);
            Bienenschwarm_Classes.crc2.lineTo(this.x + 0, this.y + 1);
            Bienenschwarm_Classes.crc2.lineTo(this.x + 0, this.y - 2);
            Bienenschwarm_Classes.crc2.lineTo(this.x - 1, this.y - 2);
            Bienenschwarm_Classes.crc2.lineTo(this.x - 1, this.y - 1);
            Bienenschwarm_Classes.crc2.lineTo(this.x - 2, this.y + 0);
            Bienenschwarm_Classes.crc2.closePath();
            Bienenschwarm_Classes.crc2.fill();
            Bienenschwarm_Classes.crc2.stroke();
            Bienenschwarm_Classes.crc2.beginPath();
            Bienenschwarm_Classes.crc2.fillStyle = this.color;
            Bienenschwarm_Classes.crc2.lineTo(this.x + 4, this.y + 0);
            Bienenschwarm_Classes.crc2.lineTo(this.x + 4, this.y - 1);
            Bienenschwarm_Classes.crc2.lineTo(this.x + 5, this.y - 1);
            Bienenschwarm_Classes.crc2.lineTo(this.x + 5, this.y - 2);
            Bienenschwarm_Classes.crc2.lineTo(this.x + 4, this.y - 2);
            Bienenschwarm_Classes.crc2.lineTo(this.x + 4, this.y - 3);
            Bienenschwarm_Classes.crc2.lineTo(this.x + 0, this.y - 3);
            Bienenschwarm_Classes.crc2.lineTo(this.x + 0, this.y + 0);
            Bienenschwarm_Classes.crc2.closePath();
            Bienenschwarm_Classes.crc2.fill();
            Bienenschwarm_Classes.crc2.stroke();
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
    Bienenschwarm_Classes.bee = bee;
})(Bienenschwarm_Classes || (Bienenschwarm_Classes = {}));
//# sourceMappingURL=Bienen.js.map