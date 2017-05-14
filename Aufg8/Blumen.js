var L4_Classes;
(function (L4_Classes) {
    var flower = (function () {
        function flower() {
        }
        return flower;
    }());
    L4_Classes.flower = flower;
    constructor(_x, number, _y, number, _type, string);
    {
        this.x = _.x;
        this.y = _y;
        this.type = _type;
    }
    FlowerRandomPlace();
    void {
        let: this.x, number: number,
        let: this.y, number: number,
        drawBlume: function () { }, this: .x, this: .y
    };
    drawFlower();
    void {
        crc2: .beginPath(),
        var: this.color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","
            + Math.floor(Math.random() * 255) + ")",
        crc2: .fillStyle = color,
        crc2: .strokeStyle = color,
        crc2: .ellipse(this.x + 0, this.y + 0, 4, 10, 0 * Math.PI / 180, 0, 2 * Math.PI),
        crc2: .ellipse(this.x + 0, this.y + 0, 4, 10, 45 * Math.PI / 180, 0, 2 * Math.PI),
        crc2: .ellipse(this.x + 0, this.y + 0, 4, 10, 90 * Math.PI / 180, 0, 2 * Math.PI),
        crc2: .ellipse(this.x + 0, this.y + 0, 4, 10, 135 * Math.PI / 180, 0, 2 * Math.PI),
        crc2: .closePath(),
        crc2: .fill(),
        crc2: .stroke(),
        crc2: .beginPath(),
        crc2: .fillStyle = "#FFFFFF",
        crc2: .strokeStyle = "#FFFFFF",
        crc2: .ellipse(this.x + 0, this.y + 0, 4, 4, 0 * Math.PI / 180, 0, 2 * Math.PI),
        crc2: .closePath(),
        crc2: .fill()
    };
})(L4_Classes || (L4_Classes = {}));
//# sourceMappingURL=Blumen.js.map