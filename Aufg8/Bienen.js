var L4_Classes;
(function (L4_Classes) {
    var bee = (function () {
        function bee(_x, _y, _leftpush, _rightpush, _color) {
            this.x = _x;
            this.y = _y;
            this.leftpush = _leftpush;
            this.rightpush = _rightpush;
            this.color = _color;
        }
        bee.prototype.overflow = function () {
            if (this.x < 0)
                this.x = 400;
            if (this.x > 400)
                this.x = 0;
            if (this.y < 0)
                this.y = 400;
            if (this.y > 400)
                this.y = 0;
        };
        bee.prototype.Bienencolor = function () {
            for (var i = 0; i < L4_Classes.n; i++) {
                var b = new bee(150, 60);
                L4_Classes.bees[i] = b;
                this.color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","
                    + Math.floor(Math.random() * 0) + ")";
            }
        };
        bee.prototype.NeueBienen = function () {
            var b = { this: .x, 150: , this: .y, 150: , this: .leftpush, 0: , this: .rightpush, 0: , this: .color, "": , this: .gelehmt, false:  };
            L4_Classes.bees.push(b);
            b.color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","
                + Math.floor(Math.random() * 0) + ")";
            L4_Classes.n++;
            console.log("neueBiene");
        };
        bee.prototype.Bienenanimation = function () {
            for (var i = 0; i < L4_Classes.n; i++) {
                var b = L4_Classes.bees[i];
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
                    b.x += 10;
                }
                else {
                    this.x += Math.floor(Math.random() * 11) - 6;
                    this.y += Math.floor(Math.random() * 11) - 5;
                    this.leftpush++;
                }
            }
        };
        bee.prototype.drawBieneBienenTS = function () {
            L4_Classes.crc2.beginPath();
            L4_Classes.crc2.fillStyle = "#000000";
            L4_Classes.crc2.strokeStyle = "#000000";
            L4_Classes.crc2.lineTo(this.x - 1, this.y + 0);
            L4_Classes.crc2.lineTo(this.x - 1, this.y + 1);
            L4_Classes.crc2.lineTo(this.x + 0, this.y + 1);
            L4_Classes.crc2.lineTo(this.x + 0, this.y - 2);
            L4_Classes.crc2.lineTo(this.x - 1, this.y - 2);
            L4_Classes.crc2.lineTo(this.x - 1, this.y - 1);
            L4_Classes.crc2.lineTo(this.x - 2, this.y + 0);
            L4_Classes.crc2.closePath();
            L4_Classes.crc2.fill();
            L4_Classes.crc2.stroke();
            L4_Classes.crc2.beginPath();
            L4_Classes.crc2.fillStyle = this.color;
            L4_Classes.crc2.lineTo(this.x + 4, this.y + 0);
            L4_Classes.crc2.lineTo(this.x + 4, this.y - 1);
            L4_Classes.crc2.lineTo(this.x + 5, this.y - 1);
            L4_Classes.crc2.lineTo(this.x + 5, this.y - 2);
            L4_Classes.crc2.lineTo(this.x + 4, this.y - 2);
            L4_Classes.crc2.lineTo(this.x + 4, this.y - 3);
            L4_Classes.crc2.lineTo(this.x + 0, this.y - 3);
            L4_Classes.crc2.lineTo(this.x + 0, this.y + 0);
            L4_Classes.crc2.closePath();
            L4_Classes.crc2.fill();
            L4_Classes.crc2.stroke();
        };
        return bee;
    }());
    L4_Classes.bee = bee;
})(L4_Classes || (L4_Classes = {}));
//# sourceMappingURL=Bienen.js.map